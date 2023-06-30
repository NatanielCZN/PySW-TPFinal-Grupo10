import { Login } from "./login.model";
import { Servicio } from "./servicio";

export class Gestor extends Login {
    _id!: string;
    nombre!: string;
    apellido!: string;
    email!: string;
    dni!: string;
    fechaNacimiento!: string;
    edad!: number;
    servicio!: Array<Servicio>;

    constructor() {
        super();
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.dni = '';
        this.fechaNacimiento = '';
        this.edad = 0;
        this.servicio = [];
    }
}
