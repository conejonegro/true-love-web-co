# Spec: Stack / Plataformas

## Objetivo
Generar confianza técnica mostrando las herramientas con las que True Love Web Co construye. El visitante entiende qué tecnología hay detrás de su proyecto y por qué se eligió.

## Alcance
- Nueva sección entre Servicios y Contacto
- Título de sección
- 5 plataformas/tecnologías con nombre y descripción breve de para qué se usa:

| Tecnología | Uso |
|---|---|
| WordPress | Sitios web amigables y autogestionados — el cliente puede editar su propio contenido. También ofrecemos gestión por cuenta del equipo. |
| WooCommerce | E-commerce sobre WordPress — tiendas en línea con catálogo, carrito y pagos. |
| React | Interfaces modernas, rápidas e interactivas para proyectos que necesitan más que un sitio estático. |
| Next.js | Aplicaciones web de alto rendimiento con SEO optimizado. El stack preferido del equipo para proyectos ambiciosos. |
| Firebase | Backend en la nube: autenticación, base de datos en tiempo real y soporte para e-commerce y apps con login. |

## Fuera de alcance
- Precios o comparativas entre tecnologías
- Logos descargados de internet o assets externos
- Recomendaciones de cuál elegir (eso va en el proceso de consultoría)

## Criterios de aceptación
- Se muestran las 5 tecnologías con nombre y descripción
- Diseño coherente con Hero y Servicios (dark, dev, minimalista)
- Responsive
- Sin librerías UI externas

## Edge cases / notas
- Los nombres de las tecnologías son marcas — escribirlos exactamente: WordPress, WooCommerce, React, Next.js, Firebase
- Las descripciones deben hablar del valor para el cliente, no de features técnicas internas
- El estilo visual puede usar el nombre de la tecnología como elemento tipográfico principal (grande, bold) con la descripción debajo

---

## Plan de Implementación

### Archivos a crear
- `app/components/Stack/Stack.jsx`
- `app/components/Stack/Stack.module.css`

### Archivos a modificar
- `app/page.js` — montar `<Stack />` entre `<Servicios />` y `<Contacto />`

### Estructura de componentes

```
<section id="stack" className={styles.stack}>
  <div className={styles.inner}>

    <header className={styles.header}>
      <p className={styles.eyebrow}>// stack</p>
      <h2 className={styles.title}>Con qué lo construimos</h2>
    </header>

    <ul className={styles.lista}>
      {stack.map((item, i) => (
        <li key={item.id} className={styles.item}>
          <span className={styles.numero}>0{i + 1}</span>
          <span className={styles.nombre}>{item.nombre}</span>
          <p className={styles.desc}>{item.descripcion}</p>
        </li>
      ))}
    </ul>

  </div>
</section>
```

### Layout visual

```
Desktop — grid de 3 columnas por fila:
┌────────┬──────────────┬──────────────────────────────────┐
│  01    │  WordPress   │  Sitios web amigables y          │
│        │              │  autogestionados...              │
├────────┼──────────────┼──────────────────────────────────┤
│  02    │  WooCommerce │  E-commerce sobre WordPress...   │
├────────┼──────────────┼──────────────────────────────────┤
│  03    │  React       │  Interfaces modernas...          │
├────────┼──────────────┼──────────────────────────────────┤
│  04    │  Next.js     │  Aplicaciones web de alto...     │
├────────┼──────────────┼──────────────────────────────────┤
│  05    │  Firebase    │  Backend en la nube...           │
└────────┴──────────────┴──────────────────────────────────┘

Móvil — stack vertical, número + nombre en una línea, desc abajo:
┌────────────────────────┐
│  01  WordPress         │
│  Sitios web amigables  │
│  y autogestionados...  │
├────────────────────────┤
│  02  WooCommerce       │
│  E-commerce sobre...   │
└────────────────────────┘
```

### Data del componente

```js
const stack = [
  {
    id: "wordpress",
    nombre: "WordPress",
    descripcion: "Sitios web amigables y autogestionados — el cliente edita su propio contenido sin tocar código. También ofrecemos gestión completa por cuenta del equipo.",
  },
  {
    id: "woocommerce",
    nombre: "WooCommerce",
    descripcion: "E-commerce sobre WordPress. Catálogo, carrito, pasarela de pagos y todo lo que una tienda en línea necesita para vender.",
  },
  {
    id: "react",
    nombre: "React",
    descripcion: "Interfaces modernas, rápidas e interactivas. Para proyectos que necesitan más dinamismo que un sitio estático.",
  },
  {
    id: "nextjs",
    nombre: "Next.js",
    descripcion: "Aplicaciones web de alto rendimiento con SEO optimizado desde el día uno. El stack preferido del equipo para proyectos ambiciosos.",
  },
  {
    id: "firebase",
    nombre: "Firebase",
    descripcion: "Backend en la nube: autenticación de usuarios, base de datos en tiempo real y soporte para e-commerce y apps con login.",
  },
]
```

### CSS

**`Stack.module.css`**
- `.stack`: `padding: 6rem 2rem`, `background: var(--color-bg-primary)`
- `.inner`: `max-width: 1100px`, `margin: 0 auto`
- `.header`: `text-align: center`, `margin-bottom: 4rem` — mismo patrón que Servicios
- `.eyebrow`: igual al patrón global — Geist Mono, text-secondary, 0.875rem
- `.title`: `clamp(2rem, 4vw, 3rem)`, `font-weight: 900`, `letter-spacing: -0.02em`
- `.lista`: `list-style: none`, borde superior `1px solid var(--color-border)`
- `.item`: `display: grid`, `grid-template-columns: 3rem 14rem 1fr`, `gap: 2rem`, `align-items: baseline`, `padding: 1.75rem 0`, `border-bottom: 1px solid var(--color-border)`, `transition: background 0.2s ease`
- `.item:hover .nombre`: `color: var(--color-accent)` — hover sutil solo en el nombre
- `.numero`: `font-family: var(--font-geist-mono)`, `color: var(--color-accent)`, `font-size: 0.75rem`, `opacity: 0.6`, `padding-top: 0.2rem`
- `.nombre`: `font-size: 1.25rem`, `font-weight: 700`, `color: var(--color-text-primary)`, `transition: color 0.2s ease`
- `.desc`: `color: var(--color-text-secondary)`, `font-size: 0.9375rem`, `line-height: 1.6`
- `@media (max-width: 768px)`: `.item` → `grid-template-columns: 2rem 1fr`, `grid-template-rows: auto auto`, `.desc` → `grid-column: 1 / -1`

### Decisiones técnicas
- Lista `<ul>/<li>` en lugar de cards: semántica correcta para una enumeración, y visualmente diferencia esta sección de Servicios
- Grid de 3 columnas por item (número + nombre + desc): alineación perfecta entre filas, como una tabla sin bordes
- Hover solo en el color del nombre (no en el fondo de la fila): más elegante, menos "tabla de datos"
- Fondo `--color-bg-primary` igual que Servicios: estas dos secciones forman el bloque central de la página, Contacto cierra con `--color-bg-secondary`

### Orden de implementación
1. Crear `Stack.module.css`
2. Crear `Stack.jsx`
3. Actualizar `page.js`

---

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa
