# Spec: Contacto

## Objetivo
Dar al visitante una forma directa e inmediata de iniciar contacto con True Love Web Co. Sin fricción — un click y ya están hablando con el equipo.

## Alcance
- Sección `#contacto` como cierre de la landing
- Título y subtítulo de sección
- Tres canales de contacto:
  1. **WhatsApp** — botón que abre chat directo al número 33 2343 1091
  2. **Email** — link que abre cliente de correo con luisrosalesochoa@proton.me
  3. **Instagram** — link a @truelove_ds que abre en nueva pestaña
- Sin formulario

## Fuera de alcance
- Formulario de contacto
- Mapa o dirección física
- Más redes sociales (Twitter, LinkedIn, etc.)
- Backend o lógica de envío de mensajes

## Criterios de aceptación
- La sección tiene `id="contacto"` para que el CTA del Hero funcione
- El botón de WhatsApp usa `https://wa.me/523323431091` y abre en nueva pestaña
- El email usa `mailto:luisrosalesochoa@proton.me`
- El Instagram enlaza a `https://www.instagram.com/truelove_ds/` y abre en nueva pestaña
- Los tres canales son visualmente distinguibles y tienen hover state
- WhatsApp es el CTA más prominente (primario)
- Etiquetas semánticas y `rel="noopener noreferrer"` en links externos

## Edge cases / notas
- En móvil, el link de WhatsApp abre la app directamente (comportamiento nativo de `wa.me`)
- El número en México incluye el código de país: `+52` → `wa.me/523323431091`
- Mantener el estilo dev/hacker coherente con Hero y Servicios

---

## Plan de Implementación

### Archivos a crear
- `app/components/Contacto/Contacto.jsx` — componente completo con los tres canales
- `app/components/Contacto/Contacto.module.css` — estilos

### Archivos a modificar
- `app/page.js` — importar y renderizar `<Contacto />` debajo de `<Servicios />`

### Estructura de componentes

```
<section id="contacto" className={styles.contacto}>
  <div className={styles.inner}>

    <header className={styles.header}>
      <p className={styles.eyebrow}>// contacto</p>
      <h2 className={styles.title}>Hablemos.</h2>
      <p className={styles.sub}>Sin formularios. Sin esperas.</p>
    </header>

    <div className={styles.canales}>

      <a href="https://wa.me/523323431091"          ← CTA primario
         target="_blank"
         rel="noopener noreferrer"
         className={styles.whatsapp}>
        <WhatsAppIcon />
        Escribir por WhatsApp
      </a>

      <div className={styles.secundarios}>
        <a href="mailto:luisrosalesochoa@proton.me"
           className={styles.canal}>
          <EmailIcon />
          luisrosalesochoa@proton.me
        </a>
        <a href="https://www.instagram.com/truelove_ds/"
           target="_blank"
           rel="noopener noreferrer"
           className={styles.canal}>
          <InstagramIcon />
          @truelove_ds
        </a>
      </div>

    </div>
  </div>
</section>
```

### Jerarquía visual

```
Desktop:                          Móvil:
┌─────────────────────────────┐   ┌─────────────────────┐
│       // contacto           │   │     // contacto     │
│        Hablemos.            │   │      Hablemos.      │
│  Sin formularios. Sin...    │   │  Sin formularios... │
│                             │   │                     │
│  [ WhatsApp — CTA grande ]  │   │ [ WhatsApp grande ] │
│                             │   │                     │
│  [ Email ] [ Instagram ]    │   │     [ Email ]       │
└─────────────────────────────┘   │   [ Instagram ]     │
                                  └─────────────────────┘
```

### Iconos
SVG inline en el JSX — sin librería. Tres iconos simples:
- **WhatsApp**: path estándar del logo (simple, sin dependencias)
- **Email**: sobre/envelope (líneas geométricas)
- **Instagram**: cámara cuadrada (path simple)

Cada icono es un componente funcional pequeño dentro del mismo archivo `Contacto.jsx`.

### CSS

**`Contacto.module.css`**
- `.contacto`: `background: var(--color-bg-secondary)`, `padding: 6rem 2rem`, borde superior con gradiente (igual al `::after` del Hero pero invertido: `::before`)
- `.inner`: `max-width: 700px`, `margin: 0 auto`, `text-align: center`
- `.header`: `margin-bottom: 3.5rem`
- `.eyebrow`: igual al patrón de Hero y Servicios — Geist Mono, `color: var(--color-text-secondary)`
- `.title`: `font-size: clamp(2.5rem, 5vw, 4rem)`, `font-weight: 900`, `letter-spacing: -0.02em`
- `.sub`: `color: var(--color-text-secondary)`, `margin-top: 0.75rem`, `font-size: 1rem`
- `.canales`: `display: flex`, `flex-direction: column`, `align-items: center`, `gap: 1.25rem`
- `.whatsapp`: botón primario grande — `background: var(--color-accent)`, `color: var(--color-bg-primary)`, `font-weight: 700`, `font-size: 1.0625rem`, `padding: 1rem 2.5rem`, `border-radius: 8px`, `display: flex`, `align-items: center`, `gap: 0.75rem`, `width: fit-content`, `transition: opacity 0.2s ease`
- `.whatsapp:hover`: `opacity: 0.88`
- `.secundarios`: `display: flex`, `gap: 1rem`, `flex-wrap: wrap`, `justify-content: center`
- `.canal`: `display: flex`, `align-items: center`, `gap: 0.5rem`, `color: var(--color-text-secondary)`, `font-size: 0.9375rem`, `padding: 0.75rem 1.25rem`, `border: 1px solid var(--color-border)`, `border-radius: 8px`, `transition: border-color 0.2s, color 0.2s`
- `.canal:hover`: `border-color: var(--color-accent-2)`, `color: var(--color-accent-2)`
- `@media (max-width: 640px)`: `.secundarios` → `flex-direction: column`, `.canal` → `width: 100%`, `justify-content: center`

### Decisiones técnicas
- Fondo `--color-bg-secondary` en lugar de `--color-bg-primary`: crea separación visual clara con Servicios, y da sensación de "cierre" de página
- WhatsApp como único CTA primario (filled): la jerarquía visual dirige al canal de conversión más rápido
- Email e Instagram como secundarios (outline): disponibles pero sin competir con WhatsApp
- SVG inline: cero dependencias, control total sobre color y tamaño vía CSS `currentColor`
- `rel="noopener noreferrer"` en todos los links externos: seguridad estándar

### Orden de implementación
1. Crear `Contacto.module.css`
2. Crear `Contacto.jsx`
3. Actualizar `page.js`

---

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa
