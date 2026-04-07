# Stuttgart — Sitio web institucional

Sitio web desarrollado con **Astro**, **TypeScript** y **Tailwind CSS** para presentar los servicios, trabajos y proyectos de Stuttgart.

---

## Stack tecnológico

- **Astro** → render estático y alto rendimiento
- **TypeScript** → tipado y mantenibilidad
- **Tailwind CSS** → sistema de diseño
- **JavaScript (vanilla)** → interacciones (filtros, lightbox, carrusel)

---

## Objetivo del proyecto

Este sitio está diseñado para:

- mostrar servicios eléctricos y técnicos
- presentar trabajos ejecutados de forma visual
- mantener una estructura clara y escalable
- priorizar performance y estética profesional

---

## Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── assets/
│   │   └── gallery/
│   │       ├── mantenimiento/
│   │       ├── mediciones/
│   │       ├── stuttgart_proyecto_4/
│   │       └── tableros/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── data/
│   │   └── gallery.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── galeria.astro
│   │   ├── index.astro
│   │   ├── terminos.astro
│   │   └── unite.astro
│   ├── styles/
│   └── types/
│       └── gallery.ts
├── package.json
└── README.md
