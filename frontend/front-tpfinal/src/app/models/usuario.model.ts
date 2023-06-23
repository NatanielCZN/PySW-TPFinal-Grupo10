import { Login } from "./login.model";

export class Usuario extends Login{
    _id:string;
    nombre:string;
    apellido:string
    email:string;
    dni:string;
    fechaNacimiento:string;
    edad:number;

    constructor(){
        super();
       this._id='';
       this.nombre='';
       this.apellido='';
       this.email='';
       this.dni='';
       this.fechaNacimiento='';
       this.edad=0;

    }
}