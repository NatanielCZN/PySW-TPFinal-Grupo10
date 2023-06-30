import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {

  servicio!: Servicio;

  constructor() { 
    this.servicio = new Servicio();
  }

  ngOnInit(): void {
  }


}
