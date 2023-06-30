import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario:Usuario;
  fechaNa:string="";
  constructor(private userService:UsuarioService) {
    this.usuario=new Usuario();
   }

  ngOnInit(): void {
  }

  ver(){
    console.log(this.usuario.fechaNacimiento);
  }

  guardarUsuario(){

    this.userService.guardarUsuario(this.usuario)
    .subscribe(
      (res:any)=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }



}
