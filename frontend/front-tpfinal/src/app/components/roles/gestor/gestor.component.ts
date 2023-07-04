import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Gestor } from 'src/app/models/gestor';
import { Servicio } from 'src/app/models/servicio';
import { GestorService } from 'src/app/services/gestor.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  id: any;
  tipo: any;

  gestor!: Gestor;
  servicios!: Array<Servicio>;

  constructor(private appCom: AppComponent, private servicioService: ServiciosService, private gestorService: GestorService, private router: Router) {
    this.appCom.logeado = true;

    this.servicios = new Array<Servicio>();

    this.cargarGestor(this.id);
  }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("userId");
    this.tipo = sessionStorage.getItem("tipo");
  }

  cargarGestor(id: string): void {
    this.gestor = new Gestor();

    this.gestorService.getGestor(id).subscribe(
      result => {
        Object.assign(this.gestor, result);
      },
      error => {
      }
    )
  }

  cargarServicios(id: string): void {
    this.servicios = new Array<Servicio>();

    this.servicioService.getServicios(id).subscribe(
      result => {
        let servicio: Servicio = new Servicio();

        result.forEach((element: any) => {
          Object.assign(servicio, element)

          this.servicios.push(servicio)

          servicio = new Servicio();
        });
      },
      error => {
      }
    )
  }

  irFormularioServicio(): void {
    this.router.navigate(['servicio-form']);
  }
}
