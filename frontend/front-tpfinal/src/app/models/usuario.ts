import { Reserva } from "./reserva";

export class Usuario {

    _id!: string;
    nombre!: string;
    apellido!:string;
    email!: string;
    dni!: number;
    fechaNacimiento!:string;
    edad!: number;
    reservas!: Array<Reserva>;
}
