import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console, error } from 'console';
import { AppComponent } from 'src/app/app.component';
import { Reserva } from 'src/app/models/reserva';
import { Servicio } from 'src/app/models/servicio';

import { Usuario } from 'src/app/models/usuario.model';
import { ReservaService } from 'src/app/services/reserva.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  usuario!:Usuario;
  reserva!:Reserva;
  accion!:string;
  id!:any;
  servicio!:any;
  servicios!:Array<Servicio>;
  constructor(private reservaService:ReservaService,
              private appcomponent:AppComponent,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              private usuarioService:UsuarioService,
              private serviceServicio:ServiciosService) {
     //capturando id del usuario en sesion
     this.id=sessionStorage.getItem('userId');

     appcomponent.logeado = true;
     this.reserva= new Reserva();
     this.usuario= new Usuario();
     this.cargarUsuario();

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      }else{

      }
    })
  }

  //cargar servicios
  ubicacionService!:string;
  bandServicios:boolean=false;

  cargarServicios(){
    this.serviceServicio.getServicios("380035").subscribe(
      res=>{
        let servicio = new Servicio();
        res.forEach(
          (s:any) => {
            Object.assign(servicio,s);
            this.servicios.push(servicio);
            servicio= new Servicio();
          }
        );
      },error=>{
        console.log("error Al cargar Servicios");
      }
    )
  }

  cargarUsuario(){
    this.usuarioService.getusuario(this.id).subscribe(
      (res:any)=>{
        Object.assign(this.usuario,res);
      }
    )
  }

  guardarReserva(){
    //id de Servicio CAMBIAR
    this.servicio="64a16b119845e78c3c352125";


    this.reserva.servicio =this.servicio;

    //id de usuario
    this.reserva.usuario=this.id;

    this.reserva.numeroReserva = this.usuario.reservas.length+1 ;
   // this.reserva.fechaAlta=new Date().toISOString().substring(0, 10);

    this.reservaService.crearReserva(this.reserva).subscribe(
       res => {
         if(res.status==1)
         {
          console.log("reserva guardada");
           alert(res.msg);
           this.reserva= new Reserva();
           this.router.navigate(["reserva"]);
         }
          },error=>{
              alert(error.msg);
         }
    )
  }

}
