import { Familia } from "../familias/familia";

export interface Producto {
    id: number;
    nombre: string;
    fechaAlta: Date;
    precio: number;
    descripcion: string;
    familia: Familia;
    descatalogado: boolean;
}