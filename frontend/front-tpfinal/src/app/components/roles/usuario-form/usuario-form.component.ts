import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  title:string="Ingrese sus datos";
  usuario:Usuario;
  fechaNa:string="";
  opcion:any;
  id:any;
  constructor(private userService:UsuarioService,private router:Router,private route:ActivatedRoute) {
    this.usuario=new Usuario();
   }

  ngOnInit(): void {
     this.route.params.subscribe(
      params=>{
            this.opcion=params['id'];
      }
     )
     if(this.opcion==1){
       this.id=sessionStorage.getItem('userId');
       this.userService.getusuario(this.id)
       .subscribe(
        (res:any)=>{
          Object.assign(this.usuario,res);
        },
        err=>{
          console.log(err);
        }
       )
     }
  }

  ver(){
    console.log(this.usuario.fechaNacimiento);
  }

  guardarUsuario(){
  
    if(this.opcion==0){
    this.userService.guardarUsuario(this.usuario)
    .subscribe(
      (res:any)=>{
        console.log(res);
            this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    }else{
      this.userService.actualizarUsuario(this.usuario)
      .subscribe(
        (res:any)=>{
           
           console.log(res);
        },
        err=>{
          console.log(err)
        }
      )
    }
  }
}
