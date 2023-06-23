import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { Usuario } from 'src/app/models/usuario';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas!:Array<Reserva>;
  usuarios!:Array<Usuario>;
  constructor(private reservaService:ReservaService,
              private usuarioService:UsuarioService,
              private router:Router) { 
    this.cargarUsuarios();
    this.reservas= new Array<Reserva>();
    this.usuarios= new Array<Usuario>();
  }

  ngOnInit(): void {
  }

  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe( res=>{
        let usuario= new Usuario();
        res.forEach(
          (element:any)=>{
            Object.assign(usuario,element);
            this.usuarios.push(usuario);
            usuario= new Usuario();
          }
        )
      }
    )
  }

  cargarReservas(){
   this.reservaService.getReservas().subscribe(data =>{
      let reserva= new Reserva();
      data.forEach((element:any) => {
        Object.assign(reserva,element);
        this.reservas.push(reserva);
        reserva= new Reserva();
      });
    }
   )
  }

  agregarReserva(id:string): void {
    this.router.navigate(["reservaForm",id]) 
  }
}
