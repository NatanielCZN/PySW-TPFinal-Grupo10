import { Usuario } from "./usuario";

export class Reserva {
    _id!: string;
    numeroReserva!:string;
    categoria!:string;
    cantidad!: number;
    fechaAlta!: string;
    fechaIngreso!: string;
    fechaEgreso!: string;
    precio!: number;
    reservado!:boolean;
    usuario!:Usuario;

    constructor(){}
}