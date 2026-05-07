export type CategoriaGaleria = "obra" | "tableros";

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
