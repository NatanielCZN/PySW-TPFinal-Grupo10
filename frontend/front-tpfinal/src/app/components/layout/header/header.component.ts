import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  id: any;
  tipo: any;
  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {    

    this.id = sessionStorage.getItem("userId");
    this.tipo = sessionStorage.getItem("tipo");
  }

  logout() {
    this.loginService.logout();
  }


}
