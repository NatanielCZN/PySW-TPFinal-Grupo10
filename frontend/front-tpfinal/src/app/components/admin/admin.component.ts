import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
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
