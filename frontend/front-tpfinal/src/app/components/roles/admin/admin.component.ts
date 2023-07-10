import { Component, OnInit } from '@angular/core';
import { Console, error } from 'console';
import { AppComponent } from 'src/app/app.component';
import { Admin } from 'src/app/models/admin';
import { Gestor } from 'src/app/models/gestor';
import { Resenia } from 'src/app/models/resenia';
import { Reserva } from 'src/app/models/reserva';
import { Servicio } from 'src/app/models/servicio';
import { Usuario } from 'src/app/models/usuario.model';
import { AdminService } from 'src/app/services/admin.service';
import { GestorService } from 'src/app/services/gestor.service';
import { ReseniaService } from 'src/app/services/resenia.service';
import { ReservaService } from 'src/app/services/reserva.service';
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
  reservas!:Array<Reserva>;
  resenias!:Array<Resenia>;
  servicios!:Array<Servicio>;
  tablaSeleccionada: string = 'gestores';
  reseniasUsuario!:Array<Resenia>;
  token!:any;
  constructor(private appCom:AppComponent, private adminService:AdminService , private reseniaService:ReseniaService
     ,private gestorServicio:GestorService, private usuarioService:UsuarioService, private servicioService:ServiciosService,
      private reservaService:ReservaService) {
   this.appCom.logeado=true;
   this.cargarGestores();
   this.cargarUsuarios();
   this.cargarReservas();
   this.cargarServicios();

  }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userId");
    this.tipo=sessionStorage.getItem("tipo");
    this.cargarAdministrador(this.id);
    this.token=sessionStorage.getItem("token")
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

  eliminarGestor(id:string){
    this.gestorServicio.deleteGestor(id)
    .subscribe(
      (res:any)=>{
      console.log(res);
      },
      err=>{
        console.log(err)
      }
    )
    location.reload();
  }

  eliminarUsuario(id:string){
    this.usuarioService.deleteUsuario(id)
    .subscribe(
      (res:any)=>{
      console.log(res);
      },
      err=>{
        console.log(err)
      }
    )
    location.reload();
  }


  cargarReservas(){
    this.reservas= new Array<Reserva>();
    this.reservaService.getReservas().subscribe(
        res =>{
          let reserva=new Reserva();
          res.forEach(
            (e:any)=>{
              Object.assign(reserva,e);
              this.reservas.push(reserva);
              reserva= new Reserva();
            }
          )
        },error=>{
          alert("No se pueden cargar las Reservas")
        }
      )
  }

  deleteReserva(reserva:Reserva) {
    this.reservaService.deleteReserva(reserva._id).subscribe(
      res=>{
        if(res.status==1){
            alert(res.msg);
              //recargar la lista de reservas
            this.cargarReservas();
          }
     },error=>{
          alert(error.msg);
        }
      )
  }

  cargarResenias(){
    this.resenias= new Array<Resenia>();

  }

  cargarServicios(){
    this.servicios= new Array<Servicio>();
    this.servicioService.getServiciosTotal().subscribe(
      res=>{
        let servicio=new Servicio();
          res.forEach(
            (e:any)=>{
              Object.assign(servicio,e);
              this.servicios.push(servicio);
              servicio= new Servicio();
            }
          )
      },error=>{

      }
    )
    }

  //******** FILTROS ******* */


  //Filtros para usuarios

  username!:string;
  buscarUsuarioPorUserName(){
    this.usuarios=new Array<Usuario>();
    this.usuarioService.getUsuarioPorUsername(this.username).subscribe(
      res=>{
        let usuario=new Usuario();
        res.forEach((element: any) => {
          Object.assign(usuario, element);
          this.usuarios.push(usuario);
          usuario = new Usuario();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }

  emailUser!:string;
  buscarUsuarioPorEmail(){
    this.usuarios=new Array<Usuario>();
    this.usuarioService.getUsuarioPorEmail(this.emailUser).subscribe(
      res=>{
        let usuario=new Usuario();
        res.forEach((element: any) => {
          Object.assign(usuario, element);
          this.usuarios.push(usuario);
          usuario = new Usuario();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }

  dniUser!:string;
  buscarUsuarioPorDni(){
    this.usuarios=new Array<Usuario>();
    this.usuarioService.getUsuarioPorDni(this.dniUser).subscribe(
      res=>{
        let usuario=new Usuario();
        res.forEach((element: any) => {
          Object.assign(usuario, element);
          this.usuarios.push(usuario);
          usuario = new Usuario();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }


  //Filtros para gestores

  usernameGestor!:string;
  buscarGestorPorUsername(){
    this.gestores= new Array<Gestor>();
    this.gestorServicio.getGestorPorUsername(this.usernameGestor).subscribe(
      res=>{
        let gestor=new Gestor();
        res.forEach((element: any) => {
          Object.assign(gestor, element);
          this.gestores.push(gestor);
          gestor = new Gestor();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }

  emailGestor!:string;
  buscarGestorPorEmail(){
    this.gestores= new Array<Gestor>();
    this.gestorServicio.getGestorPorEmail(this.emailGestor).subscribe(
      res=>{
        let gestor=new Gestor();
        res.forEach((element: any) => {
          Object.assign(gestor, element);
          this.gestores.push(gestor);
          gestor = new Gestor();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }

  dniGestor!:string;
  buscarGestorPorDni(){
    this.gestores= new Array<Gestor>();
    this.gestorServicio.getGestorPorDni(this.dniGestor).subscribe(
      res=>{
        let gestor=new Gestor();
        res.forEach((element: any) => {
          Object.assign(gestor, element);
          this.gestores.push(gestor);
          gestor = new Gestor();
        });
      },error=>{
        console.log("error en recuperar la informacion")
      }
    )
  }

}






