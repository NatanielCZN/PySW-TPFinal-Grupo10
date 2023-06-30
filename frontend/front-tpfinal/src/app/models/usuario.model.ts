import { Login } from "./login.model";
import { Resenia } from "./resenia";
import { Reserva } from "./reserva";

export class Usuario extends Login {
    _id!: string;
    nombre: string;
    apellido: string
    email: string;
    dni: string;
    fechaNacimiento: string;
    edad: number;
    reserva: Array<Reserva>;
    resenia: Array<Resenia>;

    constructor() {
        super();
        //this._id = '';
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.dni = '';
        this.fechaNacimiento = '';
        this.edad = 0;
        this.reserva = new Array<Reserva>();
        this.resenia = new Array<Resenia>();
    }
}