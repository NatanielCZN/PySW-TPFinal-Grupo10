import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Reserva } from 'src/app/models/reserva';
import { Usuario } from 'src/app/models/usuario.model';
import { ReservaService } from 'src/app/services/reserva.service';
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
  constructor(private reservaService:ReservaService,
              private appcomponent:AppComponent,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              private usuarioService:UsuarioService) {
     this.id=sessionStorage.getItem('userId');
     appcomponent.logeado = true;
     this.reserva= new Reserva();
     this.usuario= new Usuario();
     this.cargarUsuario();
     console.log(this.usuario);
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      }else{

      }
    })
  }

  cargarUsuario(){
    this.usuarioService.getusuario(this.id).subscribe(
      (res:any)=>{
        Object.assign(this.usuario,res);
      }
    )
  }

  guardarReserva(){
    this.reserva.usuario=this.usuario;
    /*console.log(this.reserva);
    this.usuario.reserva.push(this.reserva);*/
   //this.reserva.fechaAlta=new Date().toISOString().substring(0, 10);
   this.reservaService.crearReserva(this.reserva).subscribe(
      res => {
        if(res.status==1)
        {
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
