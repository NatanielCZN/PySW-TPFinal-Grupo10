import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  hostBD:string;
  constructor(private http:HttpClient) {
    this.hostBD='http://localhost:3000/api/usuario';
   }

   public getusuarios():Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      )
    }

    return this.http.get(this.hostBD,httpOptions);
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

  guardarUsuario(usuario: Usuario):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
       "Content-type":"application/json"
      })
    }
    let body=JSON.stringify(usuario);
    return this.http.post(this.hostBD,body,httpOptions);
  }


  actualizarUsuario(usuario:Usuario):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        "Content-type":"application/json"
     }),
     }
     let body = JSON.stringify(usuario);
     return this.http.put(this.hostBD+usuario._id,body,httpOptions);
  }

  deleteUsuario(_id: string): Observable<any> {
    const httOptions = {
      headers: new HttpHeaders({

      }),

      params: new HttpParams()
        .append('_id', _id)
    }
    return this.http.delete(this.hostBD+"/"+ _id, httOptions);
  }
}
