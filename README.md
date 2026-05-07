# Stuttgart

Sitio institucional desarrollado con Astro para presentar servicios, proyectos y galeria tecnica de Stuttgart.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- JavaScript para interacciones de UI

## Requisitos

- Node.js 20.19 o superior
- npm 10 o superior

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
/
|-- public/
|-- src/
|   |-- assets/
|   |   |-- brands/
|   |   |-- gallery/
|   |   `-- service-icons/
|   |-- components/
|   |-- data/
|   |-- layouts/
|   |-- pages/
|   `-- types/
|-- astro.config.mjs
|-- package.json
`-- tsconfig.json
```

## Paginas principales

- `/` inicio institucional
- `/galeria` galeria tecnica con filtros, carrusel y lightbox

## Notas

- Las imagenes y textos de la galeria se administran desde `src/data/gallery.ts`.
- Los recursos generados localmente por herramientas de Codex se excluyen en `.gitignore`.
