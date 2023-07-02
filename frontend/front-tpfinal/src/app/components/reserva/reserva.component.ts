import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { AppComponent } from 'src/app/app.component';
import { Reserva } from 'src/app/models/reserva';
import { Usuario } from 'src/app/models/usuario.model';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  usuario!:any;
  id:any;
  listaReservas!:Array<Reserva>;
  constructor(private reservaService:ReservaService,
              private router:Router,
              private appComponent:AppComponent,
              private usuarioService:UsuarioService) {
    //id del usuario en sesion
    this.id=sessionStorage.getItem('userId');

    this.listaReservas= new Array<Reserva>();
    this.usuario=new Usuario();
    this.appComponent.logeado = true;
    this.getUsuario();
    console.log(this.listaReservas);
  }

  ngOnInit(): void {

  }

  //Trae al usuario en sesión
  getUsuario(){
    this.usuarioService.getusuario(this.id)
    .subscribe(
      (res:any)=>{
        Object.assign(this.usuario,res);
        console.log(this.usuario);
        //cargar reservas
        this.listaReservas=this.usuario.reservas;
      },
      err=>{
        console.log(err);
      }
    )
}

deleteReserva(id:string){
  this.reservaService.deleteReserva(id).subscribe(
    res=>{
        console.log(res);
        this.recargar();
      },error=>{
        console.log(error);
      }
  )
}

agregarReserva(){
  this.router.navigate(['reservaForm',0]);
}


recargar(){
  location.reload();
}

}
