import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestorService } from './gestor.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlBase: string = "http://localhost:3000/api/";


  constructor(private httpClient: HttpClient,private usuarioService:UsuarioService, private gestorService:GestorService) { 
  }


    deleteAdmin(_id: string): Observable<any> {
      const httOptions = {
        headers: new HttpHeaders({
        }),
        params: new HttpParams()
          .append('_id', _id)
      }
      return this.httpClient.delete(this.urlBase + "admin/" + _id, httOptions);
    }
  
    deleteGestor(id:string){
      this.gestorService.deleteGestor(id);
    }

    deleteUsuario(id:string){
      this.usuarioService.deleteUsuario(id);
    }


    
}
