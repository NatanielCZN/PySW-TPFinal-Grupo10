import { Servicio } from "./servicio";

export class Gestor {

    _id!: string;
    nombre!: string;
    apellido!: string;
    email!: string;
    dni!: string;
    fechaNacimiento!: string;
    edad!: number;
    servicio!: Array<Servicio>;

    constructor() {

    }
}
