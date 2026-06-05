# Stuttgart Soluciones Eléctricas

Sitio institucional desarrollado con Astro para presentar los servicios, proyectos y galería técnica de Stuttgart Soluciones Eléctricas — empresa de ingeniería eléctrica en CABA y GBA.

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
|   |   |-- logos/
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

## Páginas

- `/` inicio institucional con hero, servicios, proyectos, marcas, contacto y FAQ
- `/galeria` galería técnica con filtros, carrusel y lightbox
- `/unite` formulario de contacto para incorporación al equipo
- `/terminos` términos y condiciones
- `/privacidad` política de privacidad

## SEO

El layout base (`src/layouts/Layout.astro`) incluye:
- `<meta name="description">` y `<meta name="keywords">` configurables por página
- Open Graph y Twitter Card
- JSON-LD `LocalBusiness` con datos estructurados para Google AI

## Notas

- Las imágenes y textos de la galería se administran desde `src/data/gallery.ts`.
- Los recursos generados localmente por herramientas de Codex se excluyen en `.gitignore`.
