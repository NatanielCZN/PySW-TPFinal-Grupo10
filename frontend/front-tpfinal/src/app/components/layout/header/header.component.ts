import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tipo:any;
  esUser:boolean=false;
  esAdmin:boolean=false;
  esGestor:boolean=false;
  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("tipo")=="user")
          this.esUser=true;

    
  }

  logout() {
    this.loginService.logout();
  }


}
