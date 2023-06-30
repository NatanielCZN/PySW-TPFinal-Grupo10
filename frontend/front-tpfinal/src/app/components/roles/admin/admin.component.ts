import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { AppComponent } from 'src/app/app.component';
import { Gestor } from 'src/app/models/gestor';
import { Usuario } from 'src/app/models/usuario.model';
import { GestorService } from 'src/app/services/gestor.service';
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
  gestores!:Array<Gestor>;
  usuarios!:Array<Usuario>;


  constructor(private appCom:AppComponent, private gestorServicio:GestorService, private usuarioService:UsuarioService, private servicioService:ServiciosService) { 
   this.appCom.logeado=true;
   this.cargarGestores();
   this.cargarUsuarios();
  }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userId");
    this.tipo=sessionStorage.getItem("tipo");
  }

  cargarServiciosGestor(){
    
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
}
