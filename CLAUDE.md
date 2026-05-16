# True Love Web Co — Landing Page

Startup de desarrollo web en Guadalajara, Jalisco, México.

## Stack
- Next.js 15 (App Router, sin TypeScript)
- CSS Modules (sin librerías de UI externas como shadcn, MUI, etc.)
- Fuente: Lato (Google Fonts)
- Sin TypeScript — todo JavaScript puro

## Paleta de colores

| Token | Nombre | Hex |
|---|---|---|
| `--color-bg-primary` | Deep Black | `#05070A` |
| `--color-bg-secondary` | Carbon Navy | `#0B1120` |
| `--color-surface` | Graphite Blue | `#111827` |
| `--color-border` | Slate Line | `#243044` |
| `--color-text-primary` | Soft White | `#F8FAFC` |
| `--color-text-secondary` | Cool Gray | `#94A3B8` |
| `--color-accent` | Cyber Mint | `#00F5A0` |
| `--color-accent-2` | Electric Cyan | `#22D3EE` |
| `--color-accent-premium` | Ultraviolet | `#8B5CF6` |
| `--color-alert` | Neon Amber | `#F59E0B` |

Siempre usar variables CSS. No hardcodear colores hex en los componentes.

## Idioma
Todo el contenido en **español**.

## SEO
- Metadata completa en cada page (`title`, `description`, `og:*`)
- Uso de etiquetas semánticas HTML (`<section>`, `<article>`, `<header>`, `<main>`, `<footer>`)
- Imágenes con `alt` descriptivo

---

## Workflow: Spec-Driven Development — 3 Roles

Este proyecto usa un workflow de 3 roles. Cada feature/ticket pasa por los 3 en orden. Luis aprueba entre cada paso.

---

### Rol [SPEC] — Agente de Especificación

**Activación:** El prompt comienza con `[SPEC]`

**Misión:** Convertir un ticket o descripción en lenguaje natural en un documento de especificación estructurado.

**Output:** Crear o actualizar `specs/[nombre-feature].md` con el siguiente formato:

```
## Objetivo
Qué problema resuelve o qué valor entrega esta feature.

## Alcance
Lista puntual de lo que incluye.

## Fuera de alcance
Lista puntual de lo que NO incluye (evita scope creep).

## Criterios de aceptación
Lista de condiciones verificables que deben cumplirse para considerar la feature completa.

## Edge cases / notas
Casos especiales, restricciones técnicas o decisiones importantes a tener en cuenta.

## Estado
- [ ] Spec aprobado por Luis
- [ ] Plan de arquitectura completo
- [ ] Implementación completa
```

**Reglas:**
- No planear implementación técnica, eso es tarea del Arquitecto
- No escribir código
- Preguntar si algo del ticket es ambiguo antes de generar el spec

---

### Rol [ARCH] — Agente de Arquitectura

**Activación:** El prompt comienza con `[ARCH]`

**Misión:** Leer el spec aprobado y producir un plan de implementación técnico detallado.

**Input esperado:** Ruta al spec (`specs/[nombre-feature].md`)

**Output:** Agregar una sección `## Plan de Implementación` al mismo spec con:

```
## Plan de Implementación

### Archivos a crear
- `app/components/[Nombre].jsx` — descripción breve

### Archivos a modificar
- `app/page.js` — descripción del cambio

### Estructura de componentes
Árbol o descripción de la jerarquía de componentes si aplica.

### CSS
Descripción de los módulos CSS necesarios y variables a usar.

### Decisiones técnicas
Justificación de las decisiones no obvias.

### Orden de implementación
1. Paso 1
2. Paso 2
...
```

**Reglas:**
- Respetar el stack: Next.js, CSS Modules, sin TypeScript, sin librerías UI externas
- Usar siempre variables CSS de la paleta definida
- No implementar, solo planear
- Si el spec tiene ambigüedades técnicas, señalarlas antes de planear

---

### Rol [DEV] — Agente de Desarrollo

**Activación:** El prompt comienza con `[DEV]`

**Misión:** Ejecutar el plan de implementación del Arquitecto, exactamente como fue definido. Sin agregar features extra.

**Input esperado:** Ruta al spec con plan incluido (`specs/[nombre-feature].md`)

**Reglas:**
- Seguir el orden de implementación del plan
- No salirse del alcance del spec
- Si algo del plan no es viable técnicamente, reportarlo antes de improvisar
- Sin comentarios innecesarios en el código
- Sin TypeScript, sin librerías UI externas
- Marcar en el spec los checkboxes completados al terminar

---

## Flujo por ticket

```
1. Luis describe el ticket en lenguaje natural
2. [SPEC] genera specs/[feature].md
3. Luis revisa y aprueba el spec
4. [ARCH] agrega el plan de implementación al spec
5. Luis revisa y aprueba el plan
6. [DEV] ejecuta la implementación
```

## Estructura del proyecto

```
true-love-web-co/
├── CLAUDE.md
├── specs/              ← specs de cada feature
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css     ← variables CSS y reset
│   └── components/
│       ├── Hero/
│       ├── Servicios/
│       ├── About/
│       └── Contacto/
└── public/
```
