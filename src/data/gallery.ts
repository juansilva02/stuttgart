import tablero01 from "../assets/gallery/expoconstrucción/tablero-01.jpg";
import tablero02 from "../assets/gallery/expoconstrucción/tablero-02.jpg";
import tablero03 from "../assets/gallery/expoconstrucción/tablero-03.jpg";
import tablero04 from "../assets/gallery/expoconstrucción/tablero-04.jpg";
import tablero05 from "../assets/gallery/expoconstrucción/tablero-05.jpg";
import tablero06 from "../assets/gallery/expoconstrucción/tablero-06.jpg";
import tablero07 from "../assets/gallery/expoconstrucción/tablero-07.jpg";
import tablero08 from "../assets/gallery/expoconstrucción/tablero-08.jpg";
import tablero09 from "../assets/gallery/expoconstrucción/tablero-09.jpg";
import tablero10 from "../assets/gallery/expoconstrucción/tablero-10.jpg";
import tablero11 from "../assets/gallery/expoconstrucción/tablero-11.jpg";
import cableado01 from "../assets/gallery/expoconstrucción/cableado-01.jpg";
import cableado02 from "../assets/gallery/expoconstrucción/cableado-02.jpg";
import cableado03 from "../assets/gallery/expoconstrucción/cableado-03.jpg";
import cableado04 from "../assets/gallery/expoconstrucción/cableado-04.jpg";
import cableado05 from "../assets/gallery/expoconstrucción/cableado-05.jpg";
import cableado06 from "../assets/gallery/expoconstrucción/cableado-06.jpg";
import iluminacion01 from "../assets/gallery/expoconstrucción/iluminacion-01.jpg";
import obra01 from "../assets/gallery/expoconstrucción/obra-01.jpg";
import obra02 from "../assets/gallery/expoconstrucción/obra-02.jpg";
import terminacion00 from "../assets/gallery/expoconstrucción/terminacion-00.jpg";
import terminacion01 from "../assets/gallery/expoconstrucción/terminacion-01.jpg";
import terminacion02 from "../assets/gallery/expoconstrucción/terminacion-02.jpg";
import terminacion03 from "../assets/gallery/expoconstrucción/terminacion-03.jpg";
import terminacion04 from "../assets/gallery/expoconstrucción/terminacion-04.jpg";
import terminacion05 from "../assets/gallery/expoconstrucción/terminacion-05.jpg";
import terminacion06 from "../assets/gallery/expoconstrucción/terminacion-06.jpg";
import terminacion07 from "../assets/gallery/expoconstrucción/terminacion-07.jpg";
import terminacion08 from "../assets/gallery/expoconstrucción/terminacion-08.jpg";
import terminacion09 from "../assets/gallery/expoconstrucción/terminacion-09.jpg";
import terminacion10 from "../assets/gallery/expoconstrucción/terminacion-10.jpg";
import terminacion11 from "../assets/gallery/expoconstrucción/terminacion-11.jpg";
import terminacion12 from "../assets/gallery/expoconstrucción/terminacion-12.jpg";

import p4_main from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-01.jpg";
import p4_2 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-02.jpg";
import p4_3 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-03.jpg";
import p4_4 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-04.jpg";
import p4_5 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-05.jpg";
import p4_6 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-06.jpg";
import p4_7 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-07.jpg";
import p4_8 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-08.jpg";
import p4_9 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-09.jpg";
import p4_10 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-10.jpg";
import p4_11 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-11.jpg";
import p4_12 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-12.jpg";
import p4_13 from "../assets/gallery/stuttgart_proyecto_4/proyecto_4-13.jpg";

import type { ImageMetadata } from "astro";

export type Categoria = "obra" | "tableros";

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

export const filtrosGaleria = [
  { key: "all", label: "Todos" },
  { key: "tableros", label: "Tableros" },
  { key: "obra", label: "Obra" },
] as const;

export const categoriaLabel: Record<Categoria, string> = {
  obra: "Obra",
  tableros: "Tableros eléctricos",
};

export const imagenesGaleria: GalleryItem[] = [
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
  {
    src: cableado01,
    titulo: "Medición eléctrica en campo",
    descripcion: "Relevamiento de parámetros eléctricos sobre instalación existente en sitio.",
    categoria: "obra",
    featured: true,
  },
  {
    src: cableado02,
    titulo: "Control de continuidad",
    descripcion: "Verificación de continuidad en conductores y conexiones de la instalación.",
    categoria: "obra",
  },
  {
    src: cableado03,
    titulo: "Verificación de tensión",
    descripcion: "Control de niveles de tensión en puntos clave del sistema eléctrico.",
    categoria: "obra",
  },
  {
    src: cableado04,
    titulo: "Medición de corriente",
    descripcion: "Registro de demanda y verificación de cargas en circuitos de distribución.",
    categoria: "obra",
  },
  {
    src: cableado05,
    titulo: "Inspección técnica",
    descripcion: "Relevamiento técnico de condiciones generales de la instalación eléctrica.",
    categoria: "obra",
  },
  {
    src: cableado06,
    titulo: "Control de aislación",
    descripcion: "Medición de resistencia de aislación en conductores y equipamiento.",
    categoria: "obra",
  },
  {
    src: obra01,
    titulo: "Verificación de instalación",
    descripcion: "Control final de parámetros antes de habilitación operativa del sistema.",
    categoria: "obra",
  },
  {
    src: obra02,
    titulo: "Análisis de red",
    descripcion: "Análisis de calidad de energía y parámetros de red en instalación comercial.",
    categoria: "obra",
    featured: true,
  },
  {
    src: iluminacion01,
    titulo: "Diagnóstico eléctrico",
    descripcion: "Evaluación técnica de instalación para detección de desvíos y condiciones de riesgo.",
    categoria: "obra",
  },
  {
    src: terminacion00,
    titulo: "Medición de demanda",
    descripcion: "Registro de demanda máxima y verificación de capacidad de la instalación.",
    categoria: "obra",
  },
  {
    src: terminacion01,
    titulo: "Control normativo",
    descripcion: "Verificación de cumplimiento normativo sobre instalación eléctrica existente.",
    categoria: "obra",
  },
  {
    src: terminacion02,
    titulo: "Relevamiento de campo",
    descripcion: "Documentación técnica de instalación para archivo y trazabilidad.",
    categoria: "obra",
  },
  {
    src: terminacion03,
    titulo: "Inspección final",
    descripcion: "Control final previo a habilitación con registro fotográfico y documental.",
    categoria: "obra",
  },
  {
    src: terminacion04,
    titulo: "Verificación PAT",
    descripcion: "Control de puesta a tierra y verificación de continuidad del conductor de protección.",
    categoria: "obra",
  },
  {
    src: terminacion05,
    titulo: "Control en campo",
    descripcion: "Medición y verificación técnica en instalación industrial.",
    categoria: "obra",
  },
  {
    src: terminacion06,
    titulo: "Mantenimiento preventivo",
    descripcion: "Limpieza, ajuste de bornes y control visual de tablero eléctrico en servicio.",
    categoria: "obra",
    featured: true,
  },
  {
    src: terminacion07,
    titulo: "Revisión de conexiones",
    descripcion: "Verificación y reapriete de conexiones en tablero para prevenir fallas térmicas.",
    categoria: "obra",
  },
  {
    src: terminacion08,
    titulo: "Sustitución de componentes",
    descripcion: "Reemplazo de elementos deteriorados para restablecer condiciones originales de operación.",
    categoria: "obra",
  },
  {
    src: terminacion09,
    titulo: "Diagnóstico termográfico",
    descripcion: "Detección de puntos calientes mediante análisis de temperatura en tablero activo.",
    categoria: "obra",
  },
  {
    src: terminacion10,
    titulo: "Mantenimiento correctivo",
    descripcion: "Intervención correctiva sobre falla detectada en instalación eléctrica existente.",
    categoria: "obra",
  },
  {
    src: terminacion11,
    titulo: "Limpieza técnica",
    descripcion: "Limpieza y descontaminación de tablero con riesgo de falla por suciedad acumulada.",
    categoria: "obra",
  },
  {
    src: terminacion12,
    titulo: "Informe de estado",
    descripcion: "Documentación del estado técnico del tablero tras la intervención de mantenimiento.",
    categoria: "obra",
  },
  {
    src: tablero08,
    titulo: "Stuttgart Proyecto 4",
    descripcion: "Vista general de la intervención técnica registrada dentro del relevamiento de obra.",
    categoria: "obra",
    featured: true,
  },
  {
    src: p4_2,
    titulo: "Detalle de obra",
    descripcion: "Montaje de artefactos de iluminación con criterio técnico y acabado prolijo.",
    categoria: "obra",
  },
  {
    src: p4_3,
    titulo: "Cableado de circuitos",
    descripcion: "Cableado y conexionado de circuitos de iluminación según plano de instalación.",
    categoria: "obra",
  },
  {
    src: p4_4,
    titulo: "Fijación de artefactos",
    descripcion: "Instalación de artefactos en cielorraso con soporte estructural adecuado.",
    categoria: "obra",
  },
  {
    src: p4_5,
    titulo: "Control de instalación",
    descripcion: "Verificación de funcionamiento y control de circuitos tras el montaje.",
    categoria: "obra",
  },
  {
    src: p4_6,
    titulo: "Iluminación de emergencia",
    descripcion: "Instalación de luminarias de emergencia según requerimiento normativo.",
    categoria: "obra",
  },
  {
    src: p4_7,
    titulo: "Instalación de luminarias",
    descripcion: "Montaje y conexionado de luminarias en área de circulación del edificio.",
    categoria: "obra",
  },
  {
    src: p4_8,
    titulo: "Prueba de iluminación",
    descripcion: "Verificación de encendido y niveles lumínicos tras finalizar la instalación.",
    categoria: "obra",
  },
  {
    src: tablero10,
    titulo: "Tablero de distribución Proy. 4",
    descripcion: "Instalación del tablero de distribución para el circuito de iluminación.",
    categoria: "tableros",
  },
  {
    src: tablero11,
    titulo: "Puesta en servicio Proy. 4",
    descripcion: "Verificación final y puesta en servicio del sistema de iluminación.",
    categoria: "obra",
  },
  {
    src: p4_11,
    titulo: "Terminación de obra",
    descripcion: "Terminaciones y acabados de la instalación con criterio estético y técnico.",
    categoria: "obra",
  },
  {
    src: p4_12,
    titulo: "Documentación de obra",
    descripcion: "Registro fotográfico del estado final para archivo y entrega al cliente.",
    categoria: "obra",
  },
  {
    src: p4_13,
    titulo: "Entrega de obra",
    descripcion: "Proyecto finalizado y entregado en condiciones de operación normal.",
    categoria: "obra",
  },
];

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
