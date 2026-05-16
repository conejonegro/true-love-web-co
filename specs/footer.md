# Spec: Footer

## Objetivo
Cerrar la página con identidad de marca, navegación rápida y datos de contacto. El visitante que llega al final tiene todo lo que necesita para actuar o volver a explorar.

## Alcance
- Footer global al final de la página
- Logo / nombre de la empresa con tagline
- Links de navegación interna (anchors a las secciones)
- Links a redes sociales (Instagram)
- Copyright con año actual
- Sin formulario ni campos de entrada

### Contenido
- **Marca:** "True Love Web Co" + tagline corto
- **Navegación:** Inicio, Servicios, Stack, Contacto
- **Redes:** Instagram @truelove_ds
- **Copyright:** © 2025 True Love Web Co. Todos los derechos reservados.

## Fuera de alcance
- Mapa del sitio completo
- Newsletter o suscripción
- Política de privacidad o términos (por ahora)
- Más redes sociales

## Criterios de aceptación
- Footer visible al final de la página, debajo de Contacto
- Links de navegación hacen scroll a su sección correspondiente
- Instagram abre en nueva pestaña
- Copyright muestra el año correcto
- Responsive: se adapta a móvil
- Coherente visualmente con el resto de la página

## Edge cases / notas
- El año del copyright debe ser dinámico (`new Date().getFullYear()`) para no quedar desactualizado
- Fondo más oscuro que Contacto para marcar el cierre definitivo de la página — usar `--color-bg-primary`

---

## Plan de Implementación

### Archivos a crear
- `app/components/Footer/Footer.jsx`
- `app/components/Footer/Footer.module.css`

### Archivos a modificar
- `app/page.js` — montar `<Footer />` al final, fuera del `<main>`

### Estructura de componentes

```
<footer className={styles.footer}>
  <div className={styles.inner}>

    <div className={styles.marca}>
      <p className={styles.nombre}>True Love Web Co</p>
      <p className={styles.tagline}>// desarrollo web con corazón</p>
    </div>

    <nav className={styles.nav} aria-label="Navegación footer">
      <a href="#hero">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#stack">Stack</a>
      <a href="#contacto">Contacto</a>
    </nav>

    <div className={styles.redes}>
      <a href="https://www.instagram.com/truelove_ds/"
         target="_blank"
         rel="noopener noreferrer">
        <InstagramIcon />
        @truelove_ds
      </a>
    </div>

  </div>

  <div className={styles.copy}>
    <p>© {new Date().getFullYear()} True Love Web Co. Todos los derechos reservados.</p>
  </div>
</footer>
```

### Layout visual

```
Desktop — 3 columnas:
┌─────────────────────────────────────────────────────┐
│  True Love Web Co     Inicio  Servicios    @truelove │
│  // dev con corazón   Stack   Contacto               │
├─────────────────────────────────────────────────────┤
│         © 2025 True Love Web Co. Todos los...        │
└─────────────────────────────────────────────────────┘

Móvil — stack vertical centrado:
┌──────────────────────┐
│   True Love Web Co   │
│  // dev con corazón  │
│                      │
│  Inicio   Servicios  │
│  Stack    Contacto   │
│                      │
│    @truelove_ds      │
│                      │
│  © 2025 True Love... │
└──────────────────────┘
```

### CSS

**`Footer.module.css`**
- `.footer`: `background: var(--color-bg-primary)`, `border-top: 1px solid var(--color-border)`, `padding: 3rem 2rem 2rem`
- `.inner`: `max-width: 1100px`, `margin: 0 auto`, `display: grid`, `grid-template-columns: 1fr auto auto`, `gap: 3rem`, `align-items: start`, `padding-bottom: 2.5rem`, `border-bottom: 1px solid var(--color-border)`
- `.marca`: `display: flex`, `flex-direction: column`, `gap: 0.375rem`
- `.nombre`: `font-size: 1rem`, `font-weight: 700`, `color: var(--color-text-primary)`
- `.tagline`: `font-family: var(--font-geist-mono)`, `font-size: 0.75rem`, `color: var(--color-accent)`, `opacity: 0.7`
- `.nav`: `display: flex`, `flex-direction: column`, `gap: 0.625rem`
- `.nav a`: `font-size: 0.875rem`, `color: var(--color-text-secondary)`, `transition: color 0.2s ease`
- `.nav a:hover`: `color: var(--color-text-primary)`
- `.redes a`: `display: flex`, `align-items: center`, `gap: 0.5rem`, `font-size: 0.875rem`, `color: var(--color-text-secondary)`, `transition: color 0.2s ease`
- `.redes a:hover`: `color: var(--color-accent)`
- `.copy`: `max-width: 1100px`, `margin: 0 auto`, `padding-top: 1.5rem`, `font-size: 0.8125rem`, `color: var(--color-text-secondary)`, `opacity: 0.5`, `text-align: center`
- `@media (max-width: 640px)`: `.inner` → `grid-template-columns: 1fr`, `text-align: center` — `.nav` → `flex-direction: row`, `flex-wrap: wrap`, `justify-content: center` — `.redes` → `justify-content: center`

### Decisiones técnicas
- `<footer>` semántico en lugar de `<div>`: accesibilidad y SEO
- Montado fuera de `<main>` en `page.js`: estructura HTML correcta (`main` es el contenido principal, `footer` es complementario)
- El icono de Instagram se reutiliza como SVG inline — mismo patrón que Contacto
- `new Date().getFullYear()` se ejecuta en el servidor (Next.js App Router = Server Component por defecto), así que el año siempre es correcto sin JS en el cliente
- Tagline en formato comentario JS `//` — mantiene el lenguaje visual del proyecto

### Orden de implementación
1. Crear `Footer.module.css`
2. Crear `Footer.jsx`
3. Actualizar `page.js`

---

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa
