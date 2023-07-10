import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Gestor } from 'src/app/models/gestor';
import { Resenia } from 'src/app/models/resenia';
import { Servicio } from 'src/app/models/servicio';
import { Usuario } from 'src/app/models/usuario.model';
import { GestorService } from 'src/app/services/gestor.service';
import { ReseniaService } from 'src/app/services/resenia.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  id: any;
  tipo: any;
  gestor!: Gestor;
  servicios: Array<Servicio>;
  usuarios:Array<Usuario>;
  resenias:Array<Resenia>;
  hola:boolean=true;
  constructor(private appCom: AppComponent, private servicioService: ServiciosService, private gestorService: GestorService,private usuarioService:UsuarioService,private reseniaService:ReseniaService, private router: Router) {
    this.appCom.logeado = true;
    this.servicios = new Array<Servicio>();
    this.usuarios=new Array<Usuario>();
    this.resenias=new Array<Resenia>();
   // this.cargarGestor(this.id);
  }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("userId");
    this.tipo = sessionStorage.getItem("tipo");
  }

  cargarGestor(): void {
    this.gestor = new Gestor();
    this.gestorService.getGestor(this.id).subscribe(
      (result:any) => {
        Object.assign(this.gestor, result);
      },
      error => { console.log(error)
      }
    )
  }

  

  irFormularioServicio(): void {
    this.router.navigate(['servicio-form']);
  }

  cargarServicios(){
    this.gestorService.getGestor(this.id).pipe(
      map((res: any) => res.servicio),
      mergeMap((servicios: string[]) => forkJoin(servicios.map(ser => this.buscarServicio(ser))))
    ).subscribe(
      (res: any[]) => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    );
  }

  buscarServicio(id:string){
    this.servicioService.getServicio(id)
    .subscribe(
      (res:any)=>{
        let servicio:Servicio=new Servicio()
             Object.assign(servicio,res);
        this.servicios.push(servicio)
      },
      err=>{
        console.log(err)
      }
    )
  }
 
  cargarResenias(){
   for(let servicio of this.servicios){
          console.log(servicio.resenia)
      
   }
    //this.reseniaService.getResenia()
  }

}
