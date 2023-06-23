import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  id:any;
  tipo:any
  constructor(private appCom:AppComponent) { 
   this.appCom.logeado=true;
  }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userId");
    this.tipo=sessionStorage.getItem("tipo");
  }
}
