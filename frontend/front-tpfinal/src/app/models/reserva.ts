import { Servicio } from "./servicio";
import { Usuario } from "./usuario.model";

export class Reserva {
    _id!: string;
    numeroReserva!: number;
    categoria!: string;
    cantidad!: number;
    fechaAlta!: string;
    fechaIngreso!: string;
    fechaEgreso!: string;
    precio!: number;
    reservado!: boolean;
    usuario!: string; 
    servicio!: string
    constructor() {

    }
}
