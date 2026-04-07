// ─── IMPORTS DE IMÁGENES ─────────────────────────────────────────────────────
// Astro optimiza automáticamente todas las imágenes importadas desde src/assets
 
// Tableros
import tablero01 from "../assets/gallery/tableros/tablero-01.jpg";
import tablero02 from "../assets/gallery/tableros/tablero-02.jpg";
import tablero03 from "../assets/gallery/tableros/tablero-03.jpg";
import tablero04 from "../assets/gallery/tableros/tablero-04.jpg";
import tablero05 from "../assets/gallery/tableros/tablero-05.jpg";
import tablero06 from "../assets/gallery/tableros/tablero-06.jpg";
import tablero07 from "../assets/gallery/tableros/tablero-07.jpg";
 
// Mediciones
import medicion01 from "../assets/gallery/mediciones/medicion-01.jpg";
import medicion02 from "../assets/gallery/mediciones/medicion-02.jpg";
import medicion03 from "../assets/gallery/mediciones/medicion-03.jpg";
import medicion04 from "../assets/gallery/mediciones/medicion-04.jpg";
import medicion05 from "../assets/gallery/mediciones/medicion-05.jpg";
import medicion06 from "../assets/gallery/mediciones/medicion-06.jpg";
import medicion07 from "../assets/gallery/mediciones/medicion-07.jpg";
import medicion08 from "../assets/gallery/mediciones/medicion-08.jpg";
import medicion09 from "../assets/gallery/mediciones/medicion-09.jpg";
import medicion10 from "../assets/gallery/mediciones/medicion-10.jpg";
import medicion11 from "../assets/gallery/mediciones/medicion-11.jpg";
import medicion12 from "../assets/gallery/mediciones/medicion-12.jpg";
import medicion13 from "../assets/gallery/mediciones/medicion-13.jpg";
import medicion14 from "../assets/gallery/mediciones/medicion-14.jpg";
import medicionIMG  from "../assets/gallery/mediciones/IMG_3741.jpg";
 
// Mantenimiento
import mant01 from "../assets/gallery/mantenimiento/mantenimiento-01.jpg";
import mant02 from "../assets/gallery/mantenimiento/mantenimiento-02.jpg";
import mant03 from "../assets/gallery/mantenimiento/mantenimiento-03.jpg";
import mant04 from "../assets/gallery/mantenimiento/mantenimiento-04.jpg";
import mant05 from "../assets/gallery/mantenimiento/mantenimiento-05.jpg";
import mant06 from "../assets/gallery/mantenimiento/mantenimiento-06.jpg";
import mant07 from "../assets/gallery/mantenimiento/mantenimiento-07.jpg";
import mant07 from "../assets/gallery/mantenimiento/mantenimiento-08.jpg";
import mant07 from "../assets/gallery/mantenimiento/mantenimiento-09.jpg";
 
// Proyecto 4
import p4_main  from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-01.jpg";
import p4_2     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-02.jpg";
import p4_3     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-03.jpg";
import p4_4     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-04.jpg";
import p4_5     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-05.jpg";
import p4_6     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-06.jpg";
import p4_7     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-07.jpg";
import p4_8     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-08.jpg";
import p4_9     from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-09.jpg";
import p4_10    from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-10.jpg";
import p4_11    from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-11.jpg";
import p4_12    from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-12.jpg";
import p4_13    from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-13.jpg";
 
import type { ImageMetadata } from "astro";
 
// ─── TIPOS ───────────────────────────────────────────────────────────────────
 
export type Categoria = "tableros" | "mediciones" | "mantenimiento" | "proyecto4";
 
export interface GalleryItem {
  src: ImageMetadata;
  titulo: string;
  descripcion: string;
  categoria: Categoria;
  featured?: boolean;
  position?: string;
}
 
export interface CarruselItem {
  src: ImageMetadata;
  titulo: string;
  descripcion: string;
  position?: string;
}
 
// ─── FILTROS ─────────────────────────────────────────────────────────────────
 
export const filtrosGaleria = [
  { key: "all",          label: "Todos"         },
  { key: "tableros",     label: "Tableros"      },
  { key: "mediciones",   label: "Mediciones"    },
  { key: "mantenimiento",label: "Mantenimiento" },
  { key: "proyecto4",    label: "Proyecto 4"    },
] as const;
 
export const categoriaLabel: Record<Categoria, string> = {
  tableros:      "Tableros eléctricos",
  mediciones:    "Mediciones y verificación",
  mantenimiento: "Mantenimiento técnico",
  proyecto4:     "Proyecto 4",
};
 
// ─── GALERÍA PRINCIPAL ───────────────────────────────────────────────────────
 
export const imagenesGaleria: GalleryItem[] = [
  // — Tableros —
  {
    src: tablero01,
    titulo: "Tablero de distribución",
    descripcion: "Instalación y conexionado de tablero de distribución con criterio de orden y protección.",
    categoria: "tableros",
    featured: true,
  },
  {
    src: tablero02,
    titulo: "Tablero de maniobra",
    descripcion: "Montaje y puesta en servicio de tablero de maniobra adaptado a requerimientos del cliente.",
    categoria: "tableros",
  },
  {
    src: tablero03,
    titulo: "Protecciones eléctricas",
    descripcion: "Instalación de protecciones termomagnéticas y diferenciales en tablero de baja tensión.",
    categoria: "tableros",
  },
  {
    src: tablero04,
    titulo: "Cableado estructurado",
    descripcion: "Ordenamiento y rotulado de conductores para facilitar mantenimiento y diagnóstico.",
    categoria: "tableros",
  },
  {
    src: tablero05,
    titulo: "Tablero industrial",
    descripcion: "Fabricación y montaje de tablero para aplicación industrial con componentes de alta calidad.",
    categoria: "tableros",
    featured: true,
  },
  {
    src: tablero06,
    titulo: "Adecuación de tablero",
    descripcion: "Revisión, reordenamiento y adecuación de tablero existente según normativa vigente.",
    categoria: "tableros",
  },
  {
    src: tablero07,
    titulo: "Puesta en servicio",
    descripcion: "Verificación y puesta en servicio de tablero eléctrico tras instalación completa.",
    categoria: "tableros",
  },
 
  // — Mediciones —
  {
    src: medicion01,
    titulo: "Medición eléctrica en campo",
    descripcion: "Relevamiento de parámetros eléctricos sobre instalación existente en sitio.",
    categoria: "mediciones",
    featured: true,
  },
  {
    src: medicion02,
    titulo: "Control de continuidad",
    descripcion: "Verificación de continuidad en conductores y conexiones de la instalación.",
    categoria: "mediciones",
  },
  {
    src: medicion03,
    titulo: "Verificación de tensión",
    descripcion: "Control de niveles de tensión en puntos clave del sistema eléctrico.",
    categoria: "mediciones",
  },
  {
    src: medicion04,
    titulo: "Medición de corriente",
    descripcion: "Registro de demanda y verificación de cargas en circuitos de distribución.",
    categoria: "mediciones",
  },
  {
    src: medicion05,
    titulo: "Inspección técnica",
    descripcion: "Relevamiento técnico de condiciones generales de la instalación eléctrica.",
    categoria: "mediciones",
  },
  {
    src: medicion06,
    titulo: "Control de aislación",
    descripcion: "Medición de resistencia de aislación en conductores y equipamiento.",
    categoria: "mediciones",
  },
  {
    src: medicion07,
    titulo: "Verificación de instalación",
    descripcion: "Control final de parámetros antes de habilitación operativa del sistema.",
    categoria: "mediciones",
  },
  {
    src: medicion08,
    titulo: "Análisis de red",
    descripcion: "Análisis de calidad de energía y parámetros de red en instalación comercial.",
    categoria: "mediciones",
    featured: true,
  },
  {
    src: medicion09,
    titulo: "Diagnóstico eléctrico",
    descripcion: "Evaluación técnica de instalación para detección de desvíos y condiciones de riesgo.",
    categoria: "mediciones",
  },
  {
    src: medicion10,
    titulo: "Medición de demanda",
    descripcion: "Registro de demanda máxima y verificación de capacidad de la instalación.",
    categoria: "mediciones",
  },
  {
    src: medicion11,
    titulo: "Control normativo",
    descripcion: "Verificación de cumplimiento normativo sobre instalación eléctrica existente.",
    categoria: "mediciones",
  },
  {
    src: medicion12,
    titulo: "Relevamiento de campo",
    descripcion: "Documentación técnica de instalación para archivo y trazabilidad.",
    categoria: "mediciones",
  },
  {
    src: medicion13,
    titulo: "Inspección final",
    descripcion: "Control final previo a habilitación con registro fotográfico y documental.",
    categoria: "mediciones",
  },
  {
    src: medicion14,
    titulo: "Verificación PAT",
    descripcion: "Control de puesta a tierra y verificación de continuidad del conductor de protección.",
    categoria: "mediciones",
  },
  {
    src: medicionIMG,
    titulo: "Control en campo",
    descripcion: "Medición y verificación técnica en instalación industrial.",
    categoria: "mediciones",
  },
 
  // — Mantenimiento —
  {
    src: mant01,
    titulo: "Mantenimiento preventivo",
    descripcion: "Limpieza, ajuste de bornes y control visual de tablero eléctrico en servicio.",
    categoria: "mantenimiento",
    featured: true,
  },
  {
    src: mant02,
    titulo: "Revisión de conexiones",
    descripcion: "Verificación y reapriete de conexiones en tablero para prevenir fallas térmicas.",
    categoria: "mantenimiento",
  },
  {
    src: mant03,
    titulo: "Sustitución de componentes",
    descripcion: "Reemplazo de elementos deteriorados para restablecer condiciones originales de operación.",
    categoria: "mantenimiento",
  },
  {
    src: mant04,
    titulo: "Diagnóstico termográfico",
    descripcion: "Detección de puntos calientes mediante análisis de temperatura en tablero activo.",
    categoria: "mantenimiento",
  },
  {
    src: mant05,
    titulo: "Mantenimiento correctivo",
    descripcion: "Intervención correctiva sobre falla detectada en instalación eléctrica existente.",
    categoria: "mantenimiento",
  },
  {
    src: mant06,
    titulo: "Limpieza técnica",
    descripcion: "Limpieza y descontaminación de tablero con riesgo de falla por suciedad acumulada.",
    categoria: "mantenimiento",
  },
  {
    src: mant07,
    titulo: "Informe de estado",
    descripcion: "Documentación del estado técnico del tablero tras la intervención de mantenimiento.",
    categoria: "mantenimiento",
  },
 
  // — Proyecto 4 —
  {
    src: p4_main,
    titulo: "Stuttgart Proyecto 4",
    descripcion: "Vista general de la intervención de luminaria en edificio comercial.",
    categoria: "proyecto4",
    featured: true,
  },
  {
    src: p4_7,
    titulo: "Instalación de luminarias",
    descripcion: "Montaje y conexionado de luminarias en área de circulación del edificio.",
    categoria: "proyecto4",
  },
  {
    src: p4_9,
    titulo: "Tablero de distribución Proy. 4",
    descripcion: "Instalación del tablero de distribución para el circuito de iluminación.",
    categoria: "proyecto4",
  },
  {
    src: p4_10,
    titulo: "Puesta en servicio Proy. 4",
    descripcion: "Verificación final y puesta en servicio del sistema de iluminación.",
    categoria: "proyecto4",
  },
];
 
// ─── CARRUSEL PROYECTO 4 ─────────────────────────────────────────────────────
 
export const proyecto4Carrusel: CarruselItem[] = [
  {
    src: p4_main,
    titulo: "Vista general",
    descripcion: "Intervención integral de luminaria en edificio comercial. Montaje, conexionado y puesta en servicio.",
  },
  {
    src: p4_2,
    titulo: "Detalle de instalación",
    descripcion: "Montaje de artefactos de iluminación con criterio técnico y acabado prolijo.",
  },
  {
    src: p4_3,
    titulo: "Conexionado de circuitos",
    descripcion: "Cableado y conexionado de circuitos de iluminación según plano de instalación.",
  },
  {
    src: p4_4,
    titulo: "Fijación de artefactos",
    descripcion: "Instalación de artefactos en cielorraso con soporte estructural adecuado.",
  },
  {
    src: p4_5,
    titulo: "Control de instalación",
    descripcion: "Verificación de funcionamiento y verificación de circuitos tras el montaje.",
  },
  {
    src: p4_6,
    titulo: "Circuito de emergencia",
    descripcion: "Instalación de luminarias de emergencia según requerimiento normativo.",
  },
  {
    src: p4_7,
    titulo: "Área de trabajo",
    descripcion: "Vista del área durante la ejecución de los trabajos de iluminación.",
  },
  {
    src: p4_8,
    titulo: "Prueba de encendido",
    descripcion: "Verificación de encendido y niveles lumínicos tras finalizar la instalación.",
  },
  {
    src: p4_9,
    titulo: "Tablero del proyecto",
    descripcion: "Tablero de distribución instalado para alimentar el sistema de iluminación.",
  },
  {
    src: p4_10,
    titulo: "Resultado final",
    descripcion: "Estado final de la instalación con todos los artefactos en servicio.",
  },
  {
    src: p4_11,
    titulo: "Detalle de terminaciones",
    descripcion: "Terminaciones y acabados de la instalación con criterio estético y técnico.",
  },
  {
    src: p4_12,
    titulo: "Documentación fotográfica",
    descripcion: "Registro fotográfico del estado final para archivo y entrega al cliente.",
  },
  {
    src: p4_13,
    titulo: "Entrega de obra",
    descripcion: "Proyecto finalizado y entregado en condiciones de operación normal.",
  },
];