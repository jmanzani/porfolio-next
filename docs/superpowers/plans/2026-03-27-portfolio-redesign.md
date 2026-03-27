# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar el portfolio como SPA multi-sección con Header navegable, Hero 2 columnas, timeline de experiencia mejorado, sección de habilidades, y formulario de contacto activo.

**Architecture:** SPA con scroll suave. Cada sección es un componente independiente. `index.js` actúa como orquestador limpio. No se añaden dependencias nuevas.

**Tech Stack:** Next.js 14 (Pages Router), React 18, Tailwind CSS 3, Onest Variable font.

---

## File Map

| Archivo | Acción | Responsabilidad |
|---|---|---|
| `src/components/Badge.js` | Modificar | Añadir variante `active` (punto verde animado) |
| `src/components/Header.js` | Modificar | Logo JMI + nav desktop + hamburguesa móvil |
| `src/components/HeroSection.js` | Crear | Hero 2 columnas: bio + tarjetas de skills |
| `src/components/ExperienceItem.js` | Modificar | Props `company`, `isActive`, `leadershipBadge` |
| `src/components/Experience.js` | Modificar | Datos actualizados con campos nuevos |
| `src/components/SkillsSection.js` | Crear | Grid de tarjetas de habilidades por categoría |
| `src/components/AboutSection.js` | Crear | Foto + nombre + bio |
| `src/pages/index.js` | Modificar | Orquestador de todas las secciones |
| `.gitignore` | Modificar | Ignorar `.superpowers/` |

---

## Task 1: Añadir `.superpowers/` a `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Añadir la entrada al final de `.gitignore`**

Añadir al final del archivo:
```
# superpowers brainstorm sessions
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers/ brainstorm sessions"
```

---

## Task 2: Actualizar `Badge.js` — variante verde animada

**Files:**
- Modify: `src/components/Badge.js`

- [ ] **Step 1: Reemplazar el contenido completo de `Badge.js`**

```jsx
export default function Badge({ children, variant }) {
  if (variant === "active") {
    return (
      <span className="flex items-center gap-x-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-300 border border-green-700/40">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        {children}
      </span>
    );
  }
  return (
    <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300">
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores de compilación.

- [ ] **Step 3: Commit**

```bash
git add src/components/Badge.js
git commit -m "feat: add active variant to Badge with green animated dot"
```

---

## Task 3: Refactorizar `Header.js` — logo JMI + hamburguesa

**Files:**
- Modify: `src/components/Header.js`

- [ ] **Step 1: Reemplazar el contenido completo de `Header.js`**

```jsx
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#top", label: "Inicio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="flex flex-col px-4 text-sm font-medium py-5 w-full xl:w-[1120px] mx-auto">
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="text-xl font-bold text-red-600 dark:text-red-400 tracking-widest"
        >
          JMI
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row gap-x-4 opacity-80">
          {links.map(({ href, label }) => (
            <a
              key={href}
              className="hover:bg-white/10 rounded-full px-2 transition"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        {/* Hamburger button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col mt-3 gap-y-1 opacity-80">
          {links.map(({ href, label }) => (
            <a
              key={href}
              className="hover:bg-white/10 rounded-lg px-3 py-2 transition"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.js
git commit -m "feat: refactor Header with JMI logo and mobile hamburger menu"
```

---

## Task 4: Crear `HeroSection.js`

**Files:**
- Create: `src/components/HeroSection.js`

- [ ] **Step 1: Crear el archivo `src/components/HeroSection.js`**

```jsx
import Badge from "@/components/Badge";
import SocialPill from "@/components/SocialPill";
import LinkedIn from "@/components/icons/LinkedIn";
import GitHub from "@/components/icons/GitHub";
import Email from "@/components/icons/Email";
import Download from "@/components/icons/Download";

const skillCards = [
  {
    icon: "⚙",
    title: "Backend",
    tags: ["C#", "ASP.NET Framework", "ASP.NET Core", "WCF", "gRPC"],
  },
  {
    icon: "🖥",
    title: "Frontend",
    tags: ["WinUI 3", "MAUI", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "🗄",
    title: "Datos",
    tags: ["SQL Server", "Entity Framework", "SSIS"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    tags: ["Azure", "Azure DevOps"],
  },
];

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Columna izquierda */}
      <div className="flex flex-col gap-y-4">
        <div>
          <Badge variant="active">Trabajando en Solimat</Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Jesús Manzaneque Iniesta
        </h1>
        <h2 className="text-xl text-black lg:text-2xl dark:text-white">
          Full Stack Developer · Toledo, España
        </h2>
        <p className="text-base text-black/70 dark:text-white/60 max-w-md">
          Más de 3 años desarrollando aplicaciones enterprise. Actualmente en
          Solimat como Técnico de Desarrollo.
        </p>
        <nav className="mt-2 flex flex-wrap gap-3">
          <SocialPill url="https://www.linkedin.com/in/jesusmanzanequeiniesta/">
            <LinkedIn cssClass="size-4 lg:size-5" />
            LinkedIn
          </SocialPill>
          <SocialPill url="https://github.com/jmanzani">
            <GitHub cssClass="size-4 lg:size-5" />
            GitHub
          </SocialPill>
          <SocialPill url="mailto:jesusmanzanequeiniesta@gmail.com">
            <Email cssClass="size-4 lg:size-5" />
            Email
          </SocialPill>
          <SocialPill url="https://drive.google.com/uc?export=download&id=1ZU5BYR1V5QKJZzo2JufFkn6kMWooRhhQ">
            <Download cssClass="size-4 lg:size-5" />
            Curriculum Vitae
          </SocialPill>
        </nav>
      </div>

      {/* Columna derecha — tarjetas de skills */}
      <div className="grid grid-cols-2 gap-3">
        {skillCards.map(({ icon, title, tags }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-y-2"
          >
            <span className="text-sm font-semibold text-black/80 dark:text-white/80">
              {icon} {title}
            </span>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-red-900/20 dark:bg-red-800/20 text-red-800 dark:text-red-300 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.js
git commit -m "feat: create HeroSection with 2-col layout and skill cards"
```

---

## Task 5: Refactorizar `ExperienceItem.js`

**Files:**
- Modify: `src/components/ExperienceItem.js`

- [ ] **Step 1: Reemplazar el contenido completo de `ExperienceItem.js`**

Nuevas props: `company` (string), `isActive` (boolean — punto dorado con glow para el puesto actual), `leadershipBadge` (string opcional — badge ámbar).

```jsx
export default function ExperienceItem({
  date,
  title,
  company,
  description,
  isActive,
  leadershipBadge,
}) {
  return (
    <div>
      <div
        className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border ${
          isActive
            ? "bg-amber-400 border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            : "bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700"
        }`}
      />
      <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-red-800 dark:text-blue-200 mt-2">
        {title}
      </h3>
      {company && (
        <p className="text-sm text-black/50 dark:text-white/50 mb-1">{company}</p>
      )}
      {leadershipBadge && (
        <span className="inline-block mb-2 text-xs bg-amber-900/30 text-amber-300 border border-amber-700/40 rounded-full px-3 py-0.5">
          ★ {leadershipBadge}
        </span>
      )}
      <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
        {description}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/ExperienceItem.js
git commit -m "feat: add company, isActive and leadershipBadge props to ExperienceItem"
```

---

## Task 6: Refactorizar `Experience.js`

**Files:**
- Modify: `src/components/Experience.js`

- [ ] **Step 1: Reemplazar el contenido completo de `Experience.js`**

Añade `company`, `isActive` y `leadershipBadge` al array de datos. Usa `company` como `key` del `map`.

```jsx
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const experiences = [
    {
      date: "Mar 2022 – Abr 2024",
      title: "Junior Engineer",
      company: "NTT DATA",
      description:
        "Entré en prácticas y fui contratado en junio de 2022. Trabajé en un proyecto ERP con C#, ASP.NET y Transact-SQL. Integré y consumí APIs REST con Postman. Elaboré documentación técnica: manuales de usuario y guías de integración. En verano de 2023 me incorporé a un proyecto Salesforce, realizando tareas de mantenimiento y actualización de la plataforma CRM.",
      isActive: false,
    },
    {
      date: "Abr 2024 – Abr 2025",
      title: "Associate Software Engineer",
      company: "COFORGE",
      description:
        "Trabajé integrado como externo en las instalaciones de SOLIMAT, en el mismo proyecto que en mi etapa posterior. Desarrollé módulos en ASP.NET Framework, WinUI 3 y Entity Framework. Trabajé con SQL Server y SSIS para la gestión de datos de afiliados, e integré servicios en la nube con WCF y gRPC.",
      isActive: false,
    },
    {
      date: "Abr 2025 – Actualidad",
      title: "Técnico de Desarrollo",
      company: "SOLIMAT",
      leadershipBadge: "Líder de Proyecto en funciones · oct. 2025 – abr. 2026",
      description:
        "Me incorporé directamente a SOLIMAT desarrollando y manteniendo dos aplicaciones enterprise de gestión y afiliación de trabajadores, empresas y autónomos. A partir de octubre de 2025, y sin dejar mis tareas de desarrollo, asumí en solitario la dirección técnica completa del proyecto durante 6 meses. Tecnologías: ASP.NET Framework, WinUI 3, MAUI, Entity Framework, WCF, gRPC, SSIS, SQL Server, Azure y Azure DevOps.",
      isActive: true,
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
      {experiences.map((experience) => (
        <li key={experience.company} className="mb-10 ms-4">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/Experience.js
git commit -m "feat: update Experience data with company, isActive and leadershipBadge fields"
```

---

## Task 7: Crear `SkillsSection.js`

**Files:**
- Create: `src/components/SkillsSection.js`

- [ ] **Step 1: Crear el archivo `src/components/SkillsSection.js`**

La tarjeta "Otros" tiene `fullWidth: true` y ocupa todo el ancho con `col-span-full`.

```jsx
const skillCategories = [
  {
    icon: "⚙",
    title: "Backend",
    tags: ["C#", "ASP.NET Framework", "ASP.NET Core", "WCF", "gRPC"],
  },
  {
    icon: "🖥",
    title: "Frontend",
    tags: ["WinUI 3", "MAUI", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "🗄",
    title: "Bases de datos",
    tags: ["SQL Server", "Entity Framework", "SSIS"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    tags: ["Azure", "Azure DevOps"],
  },
  {
    icon: "🔧",
    title: "Otros",
    tags: ["Salesforce", "Postman", "Git"],
    fullWidth: true,
  },
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillCategories.map(({ icon, title, tags, fullWidth }) => (
        <div
          key={title}
          className={`bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-y-3 ${
            fullWidth ? "col-span-full" : ""
          }`}
        >
          <span className="text-base font-semibold text-black/80 dark:text-white/80">
            {icon} {title}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-red-900/20 dark:bg-red-800/20 text-red-800 dark:text-red-300 rounded-md px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/SkillsSection.js
git commit -m "feat: create SkillsSection with category cards grid"
```

---

## Task 8: Crear `AboutSection.js`

**Files:**
- Create: `src/components/AboutSection.js`

- [ ] **Step 1: Crear el archivo `src/components/AboutSection.js`**

```jsx
export default function AboutSection() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <img
          className="size-16 rounded-full"
          src="https://avatars.githubusercontent.com/u/83214852?v=4"
          alt="Foto de Jesús Manzaneque"
        />
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Jesús Manzaneque Iniesta
          </h3>
          <p className="text-sm text-black/50 dark:text-white/50">
            Full Stack Developer
          </p>
        </div>
      </div>
      <p className="max-w-[700px] text-lg text-black dark:text-white text-pretty">
        Llevo ligado al mundo de la informática desde los 11 años, cuando me
        regalaron mi primer ordenador. Desde entonces no he parado: siempre
        estoy al tanto de las últimas novedades en tecnología y me encanta
        saber qué viene después.
        <br />
        <br />
        Desde 2022 trabajo como desarrollador, y en estos años he pasado de
        junior a asumir el liderazgo técnico de un proyecto enterprise en
        solitario. Fuera del código, soy un apasionado de la automoción y la
        música pop asiática. Persona directa, con las ideas claras y ganas de
        seguir creciendo.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verificar que compila**

```bash
npm run build
```
Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutSection.js
git commit -m "feat: create AboutSection with photo and bio"
```

---

## Task 9: Refactorizar `index.js` — orquestador final

**Files:**
- Modify: `src/pages/index.js`

- [ ] **Step 1: Reemplazar el contenido completo de `src/pages/index.js`**

`SectionContainer` recibe `id` para las anclas de navegación. El Hero va en `id="top"` con padding extra (`cssClass="py-44 pb-32"`). `ContactForm` ya tiene su propio heading interno, no se duplica.

```jsx
import Layout from "@/components/layout";
import SectionContainer from "@/components/SectionContainer";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Briefcase from "@/components/icons/Briefcase";
import Code from "@/components/icons/Code";
import Person from "@/components/icons/Person";

export default function Home() {
  return (
    <Layout
      title="Portafolio de Jesús - Full Stack Developer"
      description="Portfolio de Jesús Manzaneque Iniesta, Full Stack Developer con más de 3 años de experiencia en Toledo, España."
    >
      <main className="px-4">
        <SectionContainer id="top" cssClass="py-44 pb-32">
          <HeroSection />
        </SectionContainer>

        <SectionContainer id="experiencia">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Briefcase cssClass="size-7" /> Experiencia laboral
          </h2>
          <Experience />
        </SectionContainer>

        <SectionContainer id="habilidades">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Code cssClass="size-7" /> Habilidades
          </h2>
          <SkillsSection />
        </SectionContainer>

        <SectionContainer id="sobre-mi">
          <h2 className="mb-6 flex items-center gap-x-2 text-2xl font-semibold text-black/80 dark:text-white/80">
            <Person cssClass="size-7" /> Sobre mí
          </h2>
          <AboutSection />
        </SectionContainer>

        <SectionContainer id="contacto">
          <ContactForm />
        </SectionContainer>
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Verificar build limpio**

```bash
npm run build
```
Esperado: sin errores ni warnings de imports no usados.

- [ ] **Step 3: Verificar visualmente en dev**

```bash
npm run dev
```
Abrir `http://localhost:3000` y comprobar:
- [ ] Logo "JMI" visible en el nav
- [ ] Nav desktop muestra los 5 links
- [ ] En mobile (< 768px) aparece el botón hamburguesa y el menú se despliega/colapsa
- [ ] Hero muestra 2 columnas en desktop y 1 en móvil
- [ ] Badge verde con punto animado en el Hero
- [ ] Tarjetas de skills visibles en el Hero (2×2)
- [ ] Sección Experiencia con punto dorado en Solimat y badge de liderazgo
- [ ] Sección Habilidades con grid de 5 tarjetas ("Otros" ocupa ancho completo)
- [ ] Sección Sobre mí con foto circular + nombre en fila
- [ ] Sección Contacto con formulario funcional
- [ ] Scroll suave al pulsar cada link del nav

- [ ] **Step 4: Commit final**

```bash
git add src/pages/index.js
git commit -m "feat: refactor index.js as clean orchestrator of all portfolio sections"
```
