import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-datos',
  templateUrl: './gestor-datos.component.html',
  styleUrls: ['./gestor-datos.component.css']
})
export class GestorDatosComponent implements OnInit {

  id!: any;
  tipo!: any;

  gestor!: Gestor;

  constructor(private appCom: AppComponent, private gestorService: GestorService) {
    this.appCom.logeado = true;

    this.gestor = new Gestor();
  }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("userId");

    this.tipo = sessionStorage.getItem("tipo");
    
    this.cargarGestor();
  }

  /**
   * Carga los datos de un Gestor
   */
  cargarGestor() {
    this.gestorService.getGestor(this.id).subscribe(
      (result: any) => {
        Object.assign(this.gestor, result);

        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }
}
