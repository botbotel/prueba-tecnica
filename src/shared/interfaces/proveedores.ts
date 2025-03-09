export interface Proveedores {
    id: number;
    codigo: string;
    nombre: string;
    cif: string;
    ean: string;
    observaciones: string | null;
    nodoLogistico_Id: number;
    fechaBaja: string | null;
    motivoBaja: string | null;
    activo: boolean;
    fechaAlta: string;
    fechaMod: string;
    usuario_Id_Alta: number;
    usuario_Id_Mod: number;
}

export interface ProveedoresResponse {
    TotalItemsCount: number;
    Page: number;
    PageSize: number | null;
    Items: Proveedores[];
}