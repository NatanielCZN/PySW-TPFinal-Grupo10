import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  id: any;
  tipo: any

  constructor(private appCom: AppComponent, private gestorService: GestorService, private router: Router) {
    this.appCom.logeado = true;    
  }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("userId");
    this.tipo = sessionStorage.getItem("tipo");
  }

  irFormularioGestor(): void {
    this.router.navigate(['gestor-form', 0]);
  }
}
