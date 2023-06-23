import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostBD:string;
  
  constructor(private http:HttpClient) {
    this.hostBD='http://localhost:3000/api/turismo/login';
   }

   public login(username:string,password:string):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      let body=JSON.stringify({username:username,password:password});
       console.log(body)
      return this.http.post(this.hostBD,body,httpOptions);
   }

   public logout() {
    //borro el vble almacenado mediante el storage
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("userid");
    }
}
