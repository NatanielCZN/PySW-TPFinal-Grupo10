import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  hostBD:string;
  constructor(private http:HttpClient) {
    this.hostBD='http://localhost:3000/api/usuario';
   }

  public getusuario(id:string):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders(
          {

          }
        )
      }

      return this.http.get(this.hostBD+"/"+id,httpOptions);
  }
}
