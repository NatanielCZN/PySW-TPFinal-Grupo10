import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { AppComponent } from 'src/app/app.component';
import { Admin } from 'src/app/models/admin';
import { Gestor } from 'src/app/models/gestor';
import { Resenia } from 'src/app/models/resenia';
import { Usuario } from 'src/app/models/usuario.model';
import { AdminService } from 'src/app/services/admin.service';
import { GestorService } from 'src/app/services/gestor.service';
import { ReseniaService } from 'src/app/services/resenia.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  id:any;
  tipo:any
  administrador!:Admin;
  gestores!:Array<Gestor>;
  usuarios!:Array<Usuario>;
  tablaSeleccionada: string = 'gestores';
  reseniasUsuario!:Array<Resenia>;

  constructor(private appCom:AppComponent, private adminService:AdminService , private reseniaService:ReseniaService
    ,private gestorServicio:GestorService, private usuarioService:UsuarioService, private servicioService:ServiciosService) { 
   this.appCom.logeado=true;
   this.cargarGestores();
   this.cargarUsuarios();
   
  }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userId");
    this.tipo=sessionStorage.getItem("tipo");
    this.cargarAdministrador(this.id);
    console.log(this.administrador);
  }

  cargarAdministrador(id:string){
    this.administrador = new Admin();
    this.adminService.getAdmin(id).subscribe(
      result => {
        Object.assign(this.administrador, result[0]);
      },
      error => {
      }
    )
  }

    cargarReseniasUsuario(idUsuario:string) {
      this.reseniaService.getReseniaUsuario(idUsuario).subscribe(
        result => {
         console.log(result + "estas resenias son")
         
         this.reseniasUsuario.push()
        },
        error => {
        }
      )
  }
  


   cargarGestores() {
    this.gestorServicio.getGestores().subscribe(
      (result) => {
          console.log(result)
          this.gestores = new Array<Gestor>();
          for (let i = 0; i < result.length; i++) {
            let unGestor = new Gestor();
            unGestor = result[i];
            this.gestores.push(unGestor);
          }
          },
      error => { alert("Error en la petición"); }
    );
  }
  
  cargarUsuarios() {
    this.usuarioService.getusuarios().subscribe(
      (result) => {
          console.log(result)
          this.usuarios = new Array<Usuario>();
          for (let i = 0; i < result.length; i++) {
            let unUsuario = new Usuario();
            unUsuario = result[i];
            this.usuarios.push(unUsuario);
          }
          },
      error => { alert("Error en la petición"); }
    );
  }

  eliminarUsuario(id:string){
    this.usuarioService.deleteUsuario(id);
    location.reload();
  }
}
