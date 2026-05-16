# Spec: Servicios

## Objetivo
Comunicar claramente qué construye True Love Web Co y para quién. Cuatro servicios concretos que cubren el rango completo de necesidades web de un negocio, con Desarrollo Web como servicio destacado.

## Alcance
- Sección `#servicios` con los 4 servicios
- Título de sección
- Grid de 4 tarjetas: una destacada (Desarrollo Web) y tres estándar
- Cada tarjeta: nombre del servicio + descripción breve
- Sin precios
- Ancla funcional (`id="servicios"`) para el CTA "Ver servicios" del Hero

### Los 4 servicios
1. **Desarrollo Web** ⭐ destacado — sitios y aplicaciones web a medida para cualquier negocio
2. **Landing Pages** — páginas de aterrizaje optimizadas para convertir visitas en clientes
3. **E-commerce** — tiendas en línea listas para vender desde el día uno
4. **Mantenimiento** — soporte continuo, actualizaciones y mejoras para tu sitio existente

## Fuera de alcance
- Apps móviles (no se ofrece este servicio)
- Precios o planes de pago
- Formulario de cotización (va en sección Contacto)
- Animaciones con librerías externas

## Criterios de aceptación
- La sección tiene `id="servicios"` para que el anchor del Hero funcione
- Se muestran exactamente 4 servicios
- "Desarrollo Web" se distingue visualmente del resto (es el servicio estrella)
- Cada tarjeta tiene nombre y descripción
- La sección usa las variables CSS de la paleta, sin colores hardcodeados
- Responsive: grid se adapta a móvil
- Etiquetas semánticas HTML correctas

## Edge cases / notas
- El servicio destacado no debe parecer un plan de pricing — es solo énfasis visual, no una jerarquía de precio
- Las descripciones deben ser cortas (1-2 líneas), directas al valor para el negocio
- El estilo visual debe mantener coherencia con el Hero: dark, dev, minimalista

---

## Plan de Implementación

### Archivos a crear
- `app/components/Servicios/Servicios.jsx` — componente de la sección completa
- `app/components/Servicios/Servicios.module.css` — estilos

### Archivos a modificar
- `app/page.js` — importar y renderizar `<Servicios />` debajo de `<Hero />`

### Estructura de componentes

```
<section id="servicios" className={styles.servicios}>
  <div className={styles.header}>
    <p className={styles.eyebrow}>// servicios</p>
    <h2 className={styles.title}>Lo que construimos</h2>
  </div>

  <div className={styles.grid}>
    <article className={`${styles.card} ${styles.featured}`}>   ← Desarrollo Web (destacado)
      <span className={styles.badge}>destacado</span>
      <h3 className={styles.cardTitle}>Desarrollo Web</h3>
      <p className={styles.cardDesc}>...</p>
    </article>

    <article className={styles.card}>   ← Landing Pages
    <article className={styles.card}>   ← E-commerce
    <article className={styles.card}>   ← Mantenimiento
  </div>
</section>
```

### Copy de cada tarjeta

| Servicio | Descripción |
|---|---|
| Desarrollo Web ⭐ | Sitios y aplicaciones web a medida. Desde un sitio institucional hasta una plataforma compleja — construimos lo que tu negocio necesita. |
| Landing Pages | Páginas de aterrizaje diseñadas para convertir. Rápidas, enfocadas y optimizadas para tus campañas. |
| E-commerce | Tiendas en línea listas para vender desde el día uno. Catálogo, carrito, pagos y todo lo que necesitas. |
| Mantenimiento | Tu sitio siempre actualizado, seguro y funcionando. Soporte continuo para que no tengas que preocuparte. |

### Layout del grid

```
Desktop (≥768px):          Móvil (<768px):
┌──────────┬──────────┐    ┌──────────────────┐
│  Desarrollo Web ⭐  │    │  Desarrollo Web ⭐ │
│  (col-span 2)       │    │  Landing Pages    │
├──────────┼──────────┤    │  E-commerce       │
│  Landing │ E-comm   │    │  Mantenimiento    │
├──────────┼──────────┤    └──────────────────┘
│  Mantenimiento      │
│  (col-span 2)       │
└──────────┴──────────┘
```

Alternativa más limpia — grid 2×2 con featured diferenciado solo por color de borde:
```
┌──────────┬──────────┐
│ Dev Web⭐ │ Landing  │
├──────────┼──────────┤
│ E-comm   │ Mantenim.│
└──────────┴──────────┘
```
→ Se usa la segunda opción (2×2 puro) para simplicidad visual. El featured se distingue solo con borde `--color-accent` y badge.

### CSS

**`Servicios.module.css`**
- `.servicios`: `padding: 6rem 2rem`, `background: var(--color-bg-primary)`, `max-width: 1100px`, `margin: 0 auto`
- `.header`: `text-align: center`, `margin-bottom: 4rem`
- `.eyebrow`: igual que Hero — `font-family: var(--font-geist-mono)`, `color: var(--color-text-secondary)`, `font-size: 0.875rem`, `margin-bottom: 1rem`
- `.title`: `font-size: clamp(2rem, 4vw, 3rem)`, `font-weight: 900`, `color: var(--color-text-primary)`, `letter-spacing: -0.02em`
- `.grid`: `display: grid`, `grid-template-columns: repeat(2, 1fr)`, `gap: 1.5rem`
- `.card`: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 12px`, `padding: 2rem`, `display: flex`, `flex-direction: column`, `gap: 0.75rem`, `transition: border-color 0.2s ease`
- `.card:hover`: `border-color: var(--color-accent-2)`
- `.featured`: `border-color: var(--color-accent)` — mismo `.card` con override de borde
- `.featured:hover`: `border-color: var(--color-accent)` — mantener accent en hover
- `.badge`: `font-family: var(--font-geist-mono)`, `font-size: 0.6875rem`, `color: var(--color-accent)`, `border: 1px solid var(--color-accent)`, `border-radius: 4px`, `padding: 0.125rem 0.5rem`, `width: fit-content`
- `.cardTitle`: `font-size: 1.25rem`, `font-weight: 700`, `color: var(--color-text-primary)`
- `.cardDesc`: `font-size: 0.9375rem`, `color: var(--color-text-secondary)`, `line-height: 1.6`
- `@media (max-width: 640px)`: `.grid` → `grid-template-columns: 1fr`

### Decisiones técnicas
- Grid 2×2 puro en lugar de featured con col-span: más simple, evita problemas de alineación en responsive, y el badge `// destacado` comunica el énfasis sin romper el layout
- El badge usa sintaxis de comentario JS (`//`) para mantener el lenguaje visual del proyecto
- `<article>` para cada servicio: semántica correcta para contenido independiente

### Orden de implementación
1. Crear `Servicios.module.css`
2. Crear `Servicios.jsx`
3. Actualizar `page.js`

---

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa
