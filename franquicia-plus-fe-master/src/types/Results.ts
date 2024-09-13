import { DetalleMarca } from "./DetalleMarca"
import { Inversion } from "./Inversion"
import { Sector } from "./Sector"

export type Results = {
    id: number
    created_at: string,
    nombre: string,
    precio: number,
    descripcion: string,
    imagenmarca: string,
    altimagenmarca: string,
    titleimagenmarca: string,
    imagenlocal: string,
    altimagenlocal: string,
    titleimagenlocal: string,
    imagenlogo: string,
    altimagenlogo: string,
    titleimagenlogo: string,
    categoria: {
        id: number,
        nombre: string,
        iconofp: string
    },
    estado: Sector,
    ubicacion: Sector[]
    directorio: [],
    inversion: Inversion,
    prioridad: {
        id: number,
        nombre: string,
        valor: number,
    },
    detalle_marca: null | DetalleMarca,
    urlmarca: string,
}