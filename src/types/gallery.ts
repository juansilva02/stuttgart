export type CategoriaGaleria =
  | "tableros"
  | "mediciones"
  | "mantenimiento"
  | "stuttgart_proyecto_4";

export interface FiltroGaleria {
  key: "all" | CategoriaGaleria;
  label: string;
}

export interface ImagenGaleria {
  categoria: CategoriaGaleria;
  titulo: string;
  descripcion: string;
  src: string;
  featured?: boolean;
  position?: string;
}