# Spec: Sección "Industrias en las que trabajamos"

## Objetivo
Comunicar a los visitantes que True Love Web Co tiene experiencia y soluciones específicas para distintos sectores del mercado mexicano, generando confianza y conexión inmediata con el cliente potencial según su industria.

## Alcance
- Nueva sección en la landing page con el título "Industrias en las que trabajamos"
- 7 industrias con nombre, ícono representativo y descripción corta
- Industrias a incluir:
  1. Inmobiliarias
  2. Escuelas y Centros Educativos
  3. Restaurantes y Gastronomía
  4. Despachos Legales
  5. Hoteles y Turismo
  6. Constructoras y Arquitectos
  7. Gimnasios y Bienestar

## Fuera de alcance
- Páginas individuales por industria (landing por vertical)
- Casos de estudio o portafolio por sector
- Filtros o interacciones complejas
- Formulario de contacto segmentado por industria

## Criterios de aceptación
- [ ] La sección es visible en la landing page entre Servicios y Contacto
- [ ] Cada industria muestra: ícono, nombre y descripción de 1-2 líneas
- [ ] El diseño es responsivo (mobile, tablet, desktop)
- [ ] Se usan variables CSS de la paleta definida (sin colores hardcodeados)
- [ ] El contenido está en español
- [ ] La sección tiene etiquetas semánticas HTML correctas (`<section>`, etc.)

## Descripciones por industria

| Industria | Descripción |
|---|---|
| Inmobiliarias | Catálogos de propiedades, formularios de contacto y páginas de desarrollos que convierten visitas en clientes. |
| Escuelas y Centros Educativos | Landings institucionales, inscripciones en línea y portales informativos para colegios, universidades y academias. |
| Restaurantes y Gastronomía | Menús digitales, reservaciones en línea y presencia que atrae comensales desde Google. |
| Despachos Legales | Sitios profesionales para abogados y notarías que posicionan su especialidad y captan clientes. |
| Hoteles y Turismo | Webs con booking, galerías y SEO local para hospedajes y agencias de viaje. |
| Constructoras y Arquitectos | Portafolios de proyectos y páginas que comunican experiencia y generan cotizaciones. |
| Gimnasios y Bienestar | Membresías, horarios, clases y captación de leads para studios y gym boutique. |

## Edge cases / notas
- Los íconos deben ser SVG inline o de una librería ligera (sin dependencias pesadas); confirmar con el Arquitecto
- Las descripciones son cortas intencionalmente para no sobrecargar visualmente la sección
- La sección no es un CTA principal, su función es generar identificación, no conversión directa

## Plan de Implementación

### Archivos a crear
- `app/components/Industrias/Industrias.jsx` — componente principal de la sección
- `app/components/Industrias/Industrias.module.css` — estilos de la sección

### Archivos a modificar
- `app/page.js` — importar y montar `<Industrias />` entre `<Stack />` y `<Contacto />`
- `package.json` — agregar dependencia `lucide-react`

### Estructura de componentes
```
<section id="industrias">         ← Industrias.jsx
  <div .inner>
    <header>
      <p .eyebrow>// industrias</p>
      <h2 .title>Industrias en las que trabajamos</h2>
    </header>
    <div .grid>
      {industrias.map(...)}
        <article .card>
          <div .iconWrapper>
            <LucideIcon />         ← ícono importado de lucide-react
          </div>
          <h3 .cardTitle />
          <p .cardDesc />
        </article>
    </div>
  </div>
</section>
```

### Íconos (lucide-react)
| Industria | Ícono Lucide |
|---|---|
| Inmobiliarias | `Building2` |
| Escuelas y Centros Educativos | `GraduationCap` |
| Restaurantes y Gastronomía | `UtensilsCrossed` |
| Despachos Legales | `Scale` |
| Hoteles y Turismo | `Hotel` |
| Constructoras y Arquitectos | `HardHat` |
| Gimnasios y Bienestar | `Dumbbell` |

### CSS
- Grid: `repeat(auto-fill, minmax(280px, 1fr))` — se adapta solo a cualquier viewport
- Mobile (< 640px): `1fr`
- Ícono: color `var(--color-accent)`, tamaño 28px
- Cards: mismo patrón que Servicios (`var(--color-surface)`, `var(--color-border)`, hover con `var(--color-accent-2)`)
- Eyebrow: mismo patrón que Servicios (`// industrias`, `var(--color-text-secondary)`, monospace)
- Padding de sección: `6rem 2rem` (consistente con Servicios)

### Decisiones técnicas
- **lucide-react en lugar de SVGs manuales:** evita crear 7 archivos SVG y mantiene consistencia visual entre íconos. No es una librería UI (sin componentes, sin estilos), solo íconos SVG como componentes React.
- **`auto-fill` en el grid:** con 7 items un grid fijo de 3 o 4 columnas deja "huérfanos" desalineados; `auto-fill` + `minmax` distribuye limpiamente en cualquier ancho.
- **Data array en el mismo archivo:** igual que Servicios, los datos van en el mismo `.jsx` ya que no hay lógica dinámica.

### Orden de implementación
1. Instalar `lucide-react` (`npm install lucide-react`)
2. Crear `Industrias.jsx` con el array de datos e íconos
3. Crear `Industrias.module.css` con el grid y estilos de card
4. Modificar `page.js` para montar el componente en la posición correcta

## Estado
- [x] Spec aprobado por Luis
- [x] Plan de arquitectura completo
- [x] Implementación completa
