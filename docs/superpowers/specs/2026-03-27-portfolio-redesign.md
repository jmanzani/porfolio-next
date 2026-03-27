# Portfolio Redesign — Spec

**Date:** 2026-03-27
**Project:** porfolio-next (Next.js + Tailwind CSS)

---

## Overview

Rediseño completo del portfolio como SPA (single-page application) con scroll suave entre secciones. Se mantiene la paleta dark red existente y Tailwind CSS como framework de estilos. Cada sección del portfolio vive en `index.js` como componente independiente enlazado por anclas.

---

## Architecture

**Approach:** Componente por sección (Opción B)

`index.js` actúa como orquestador limpio que importa y renderiza cada sección. Cada sección tiene su propio archivo de componente.

### Archivos a crear/modificar

```
src/
├── components/
│   ├── Header.js           ← REFACTORIZAR: logo JMI + hamburguesa móvil
│   ├── HeroSection.js      ← NUEVO
│   ├── SkillsSection.js    ← NUEVO
│   ├── AboutSection.js     ← NUEVO
│   ├── Experience.js       ← REFACTORIZAR: timeline mejorado
│   ├── ExperienceItem.js   ← REFACTORIZAR: badge liderazgo, punto dorado
│   ├── ContactForm.js      ← REUTILIZAR sin cambios
│   ├── Badge.js            ← REUTILIZAR (añadir variante verde animada)
│   ├── SocialPill.js       ← SIN CAMBIOS
│   ├── SectionContainer.js ← SIN CAMBIOS
│   ├── Footer.js           ← SIN CAMBIOS (ya actualizado)
│   └── layout.js           ← SIN CAMBIOS
└── pages/
    └── index.js            ← REFACTORIZAR: orquestador de secciones
```

---

## Sección 1 — Header

### Desktop (≥ md)
- Logo "JMI" a la izquierda (texto estilizado, mismo color que el tema)
- Links de navegación a la derecha: Inicio · Experiencia · Habilidades · Sobre mí · Contacto
- Cada link es un ancla `href="#seccion"` con scroll suave (ya configurado en globals.css)

### Móvil (< md)
- Logo "JMI" a la izquierda
- Icono hamburguesa (☰) a la derecha
- Estado interno con `useState(false)` para `isOpen`
- Menú desplegable vertical al pulsar el icono, se cierra al pulsar un link

---

## Sección 2 — Hero (`#top`)

### Desktop: 2 columnas (`md:grid-cols-2`)
**Columna izquierda:**
- Badge "Trabajando en Solimat" con punto verde animado (`animate-pulse`)
- Nombre completo: "Jesús Manzaneque Iniesta"
- Subtítulo: "Full Stack Developer · Toledo, España"
- Descripción breve: "Más de 3 años desarrollando aplicaciones enterprise. Actualmente en Solimat como Técnico de Desarrollo."
- Pills: LinkedIn, GitHub, Email, Descargar CV (Google Drive)

**Columna derecha:** 4 tarjetas de habilidades en grid 2×2
- ⚙ Backend · 🖥 Frontend · 🗄 Datos · ☁ Cloud & DevOps
- Cada tarjeta con nombre de categoría y tags de tecnologías

### Móvil: 1 columna
- Columna izquierda completa primero
- Tarjetas en grid 2×2 debajo

---

## Sección 3 — Experiencia (`#experiencia`)

Timeline con línea vertical y puntos. Datos hardcodeados en `Experience.js`.

| Empresa | Período | Punto |
|---|---|---|
| NTT DATA | Mar 2022 – Abr 2024 | Gris |
| COFORGE | Abr 2024 – Abr 2025 | Gris |
| SOLIMAT | Abr 2025 – Actualidad | Dorado (`#f59e0b`) con glow |

**SOLIMAT** lleva además un badge especial:
```
★ Líder de Proyecto en funciones · oct. 2025 – abr. 2026
```
Color ámbar/dorado, consistente con el punto del timeline.

Cada `ExperienceItem` recibe: `date`, `title`, `company`, `description`, y `isActive` (boolean para el estilo dorado).

---

## Sección 4 — Habilidades (`#habilidades`)

Grid de tarjetas por categoría. En desktop: `grid-cols-2` o `grid-cols-3`. En móvil: `grid-cols-1` o `grid-cols-2`.

| Categoría | Tecnologías |
|---|---|
| ⚙ Backend | C#, ASP.NET Framework, ASP.NET Core, WCF, gRPC |
| 🖥 Frontend | WinUI 3, MAUI, React, Next.js, Tailwind CSS |
| 🗄 Bases de datos | SQL Server, Entity Framework, SSIS |
| ☁ Cloud & DevOps | Azure, Azure DevOps |
| 🔧 Otros | Salesforce, Postman, Git |

La tarjeta "Otros" ocupa el ancho completo (`col-span-full`) cuando hay número impar.

---

## Sección 5 — Sobre mí (`#sobre-mi`)

- Foto circular (`rounded-full`, `size-16`) + nombre en la misma fila
- Subtítulo "Full Stack Developer" debajo del nombre
- Texto biográfico completo debajo en `max-w-[700px]`

**Texto:**
> Llevo ligado al mundo de la informática desde los 11 años, cuando me regalaron mi primer ordenador. Desde entonces no he parado: siempre estoy al tanto de las últimas novedades en tecnología y me encanta saber qué viene después.
>
> Desde 2022 trabajo como desarrollador, y en estos años he pasado de junior a asumir el liderazgo técnico de un proyecto enterprise en solitario. Fuera del código, soy un apasionado de la automoción y la música pop asiática. Persona directa, con las ideas claras y ganas de seguir creciendo.

---

## Sección 6 — Contacto (`#contacto`)

Reutiliza el componente `ContactForm.js` existente (sin modificaciones).
Añadir encima un texto introductorio breve: "¿Hablamos?" + dirección de email como enlace `mailto:`.

---

## Tecnologías de contenido

Sin cambios de dependencias. El proyecto ya tiene todo lo necesario:
- Next.js (Pages Router)
- Tailwind CSS
- `useState` de React (para hamburguesa)
- Fuente "Onest Variable" (globals.css)

---

## Responsivo

| Breakpoint | Comportamiento |
|---|---|
| `< md` (< 768px) | Hero 1 col, skills 2×2, nav hamburguesa, timeline simplificado |
| `≥ md` (≥ 768px) | Hero 2 cols, nav horizontal con logo |

---

## Fuera de alcance

- Cambios de dependencias o nueva librería de animaciones
- Proyectos/portfolio de trabajos (sección comentada, no incluir)
- SEO avanzado (meta tags, OG), más allá del title/description ya existente
- Dark/light mode toggle (ya funciona con `prefers-color-scheme`)
