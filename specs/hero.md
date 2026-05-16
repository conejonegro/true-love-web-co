# Spec: Hero

## Objetivo
Comunicar la propuesta de valor de True Love Web Co en el primer impacto visual: desarrollo web hecho con corazón, para cualquier tipo de negocio. Capturar la atención de visitantes con una estética dev/hacker que genere confianza y diferenciación.

## Alcance
- Sección Hero completa (above the fold)
- Tagline principal con la propuesta de valor
- Subtítulo de apoyo
- Dos CTAs: "Contactar" y "Ver servicios"
- Elemento visual decorativo con palabras reservadas de JavaScript como motivo estético
- Fondo con gradiente usando la paleta del proyecto

## Fuera de alcance
- Navegación / navbar (es un componente separado)
- Animaciones complejas con librerías externas
- Formulario de contacto (va en su propia sección)
- Imágenes o videos de fondo

## Criterios de aceptación
- El tagline comunica claramente: desarrollo web + corazón + para cualquier negocio
- Se usan palabras reservadas de JavaScript (`const`, `return`, `true`, `function`, `async`, `await`, etc.) como elemento visual decorativo integrado al diseño
- Dos botones CTA visibles: uno primario (Contactar) y uno secundario (Ver servicios)
- El fondo usa gradientes con las variables CSS de la paleta (`--color-bg-primary`, `--color-bg-secondary`, `--color-accent`, `--color-accent-premium`)
- Estética minimalista: sin exceso de elementos, mucho espacio negativo
- Responsive: se ve bien en móvil y desktop
- Usa solo CSS Modules, sin librerías UI externas

## Edge cases / notas
- Las palabras reservadas de JS deben sentirse parte del diseño, no un adorno random — pensar en cómo integrarlas (fondo decorativo, parte del tagline, sintaxis tipo código, etc.)
- El corazón puede expresarse con el literal `true` (como en `true love`) o con un símbolo tipográfico — el Arquitecto decide
- El CTA "Ver servicios" debe hacer scroll a la sección de servicios (anchor link)
- El CTA "Contactar" puede ser anchor a la sección de contacto o un link externo — definir en [ARCH]
- `--color-accent` (Cyber Mint) y `--color-accent-premium` (Ultraviolet) son los colores estrella de esta sección

---

## Plan de Implementación

### Archivos a crear
- `app/components/Hero/Hero.jsx` — componente Hero completo
- `app/components/Hero/Hero.module.css` — estilos del Hero

### Archivos a modificar
- `app/globals.css` — reemplazar boilerplate con variables CSS de la paleta + reset limpio + Lato como fuente base
- `app/layout.js` — cambiar fuente a Lato, actualizar metadata SEO (título, descripción, og:*)
- `app/page.js` — reemplazar boilerplate de Next.js con `<Hero />`

### Estructura de componentes

```
<section id="hero" className={styles.hero}>
  <div className={styles.keywords}>   ← capa decorativa, posición absoluta
    <span>const</span>
    <span>return</span>
    <span>async</span>
    <span>await</span>
    <span>function</span>
    <span>export default</span>
    <span>import</span>
    <span>true</span>
    <span>null</span>
    <span>new</span>
    <span>this</span>
    <span>typeof</span>
  </div>
  <div className={styles.content}>    ← contenido centrado, z-index superior
    <p className={styles.eyebrow}>    ← // Guadalajara, México
    <h1 className={styles.headline}>  ← "Desarrollo web"
    <p className={styles.tagline}>    ← con <span class="true">true</span>love
    <p className={styles.sub}>        ← "Para todo tipo de negocios."
    <div className={styles.ctas}>
      <a href="#contacto">Contactar</a>      ← CTA primario
      <a href="#servicios">Ver servicios</a  ← CTA secundario
    </div>
  </div>
</section>
```

### Concepto visual del headline

```
// Guadalajara, México          ← eyebrow en Geist Mono, color text-secondary

Desarrollo web                 ← headline grande, Lato Bold, text-primary
con truelove                   ← "true" en --color-accent (Cyber Mint), "love" con gradiente mint→violet

Para todo tipo de negocios.    ← subtítulo, Lato Regular, text-secondary
```

El `true` actúa como palabra reservada de JS Y como parte del nombre de la empresa. Doble sentido visual.

### CSS

**`globals.css`**
- Variables CSS completas de la paleta (todos los `--color-*`)
- `--font-sans: 'Lato', sans-serif`
- `--font-mono: var(--font-geist-mono)` (ya cargada en layout)
- Reset base: `*, body, html` limpio
- `body`: `background: var(--color-bg-primary)`, `color: var(--color-text-primary)`, `font-family: var(--font-sans)`
- Scroll behavior suave: `scroll-behavior: smooth`

**`Hero.module.css`**
- `.hero`: `min-height: 100svh`, `position: relative`, `display: flex`, `align-items: center`, `justify-content: center`
- Fondo: `background: radial-gradient(ellipse at 60% 40%, var(--color-bg-secondary) 0%, var(--color-bg-primary) 70%)`
- Línea sutil de gradiente en el borde inferior con `::after`
- `.keywords`: `position: absolute`, `inset: 0`, `overflow: hidden`, `pointer-events: none` — cada `<span>` posicionado con `position: absolute`, `font-family: var(--font-mono)`, `opacity: 0.05`, tamaños y posiciones variados
- `.content`: `position: relative`, `z-index: 1`, `text-align: center`, `max-width: 800px`, `padding: 2rem`
- `.eyebrow`: `font-family: var(--font-mono)`, `color: var(--color-text-secondary)`, `font-size: 0.875rem`
- `.headline`: `font-size: clamp(3rem, 8vw, 6rem)`, `font-weight: 900`, `line-height: 1.05`, `color: var(--color-text-primary)`
- `.tagline`: `font-size: clamp(2rem, 5vw, 3.5rem)`, `font-weight: 700` — `.true` con `color: var(--color-accent)`, `.love` con `background: linear-gradient(90deg, var(--color-accent), var(--color-accent-premium))` + `background-clip: text`
- `.sub`: `color: var(--color-text-secondary)`, `font-size: 1.125rem`, `margin-top: 1.5rem`
- `.ctas`: `display: flex`, `gap: 1rem`, `justify-content: center`, `margin-top: 2.5rem`, `flex-wrap: wrap`
- `.ctaPrimary`: `background: var(--color-accent)`, `color: var(--color-bg-primary)`, `font-weight: 700`, `padding: 0.875rem 2rem`, `border-radius: 6px`
- `.ctaSecondary`: `border: 1px solid var(--color-accent-2)`, `color: var(--color-accent-2)`, mismo padding, `border-radius: 6px`

### Decisiones técnicas
- `Geist Mono` se mantiene del boilerplate porque es perfecta para el estilo dev/hacker de los keywords y el eyebrow — no es una librería UI, es solo una fuente
- `Lato` se carga via `next/font/google` en `layout.js` (mismo patrón que el boilerplate actual)
- Los keywords decorativos son HTML estático — sin JS, sin animaciones, sin librerías. Posicionados con CSS puro (`top`, `left` hardcodeados por keyword)
- `100svh` en lugar de `100vh` para compatibilidad con móvil (evita el problema del browser chrome)
- Los CTAs son `<a>` con `href` anchor (`#contacto`, `#servicios`) — sin `<Link>` de Next.js porque son anchors de la misma página

### Orden de implementación
1. Actualizar `globals.css` con variables CSS de paleta y base styles
2. Actualizar `layout.js`: cargar Lato, metadata SEO completa, `lang="es"`
3. Crear `Hero.module.css`
4. Crear `Hero.jsx`
5. Actualizar `page.js`: eliminar boilerplate, importar y renderizar `<Hero />`

---

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa

---

## Plan de Implementación v2 — Fondo animado

### Archivos a crear
- `app/components/Hero/HeroCanvas.jsx` — componente `'use client'` con canvas animado (partículas + conexiones)

### Archivos a modificar
- `app/components/Hero/Hero.jsx` — importar `<HeroCanvas />` y montarlo dentro de `.hero`
- `app/components/Hero/Hero.module.css` — agregar pseudo-elemento `::before` para noise, ajustar z-index stack

### Sin librería externa
Canvas nativo con `requestAnimationFrame`. No se agrega ninguna dependencia npm.

### Lógica del canvas (HeroCanvas.jsx)

```
'use client'

- useRef(canvas)
- useEffect:
    1. Crear N partículas según ancho del viewport (1 cada ~18px de ancho, máx 90)
    2. Cada partícula: { x, y, vx, vy, radius: 1.5 }
       - velocidad: entre -0.25 y 0.25 (muy lenta, suave)
    3. Loop con requestAnimationFrame:
       - mover partícula, rebotar en bordes
       - dibujar punto: color accent (#00F5A0), opacidad 0.35
       - por cada par de partículas cercanas (distancia < 130px):
           opacity de línea = (1 - dist/130) * 0.12
           dibujar línea: color accent (#00F5A0)
    4. Cleanup: cancelAnimationFrame en return del useEffect
    5. ResizeObserver: recrear partículas al cambiar tamaño
```

### Z-index stack dentro de `.hero`

| Capa | z-index |
|---|---|
| Canvas (partículas) | 0 |
| Noise (::before) | 1 |
| Keywords (JS words) | 2 |
| Content (texto + CTAs) | 3 |

### CSS — cambios en Hero.module.css

- `.hero::before` (nuevo) — noise texture:
  ```css
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence */
  ```
- `.canvas` (nuevo): `position: absolute`, `inset: 0`, `z-index: 0`, `pointer-events: none`
- `.keywords`: agregar `z-index: 2`
- `.content`: actualizar de `z-index: 1` a `z-index: 3`

### Decisiones técnicas
- Canvas puro sobre tsparticles: evita ~300kb de bundle, control exacto sobre colores y opacidades
- Partículas en `'use client'` aislado: el resto del Hero sigue siendo Server Component
- Noise con SVG `feTurbulence` inline en CSS: cero requests adicionales, funciona en todos los browsers modernos
- `ResizeObserver` para manejar resize sin memory leaks
- Solo color `--color-accent` para partículas y líneas: coherencia con el estilo del Hero

### Orden de implementación
1. Crear `HeroCanvas.jsx`
2. Actualizar `Hero.module.css` (noise + z-index stack)
3. Actualizar `Hero.jsx` (montar `<HeroCanvas />`)
