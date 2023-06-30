import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resenia } from '../models/resenia';

@Injectable({
  providedIn: 'root'
})
export class ReseniaService {


  urlbase: string = "http://localhost:3000/api/"
  constructor(private _http: HttpClient) {
  }
  /////crear nuevo
  postResenia(resenia: Resenia): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    var body = JSON.stringify(resenia);
    return this._http.post(this.urlbase + "resenia/", body, httpOption)
  }
  // mostrar todos  
  getMostarResenia(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase + "resenia/", httpOption)
  }
//mostrar todos las resenias segun el usuario id
  getReseniaUsuario(usuario:string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase + "resenia/usuario/"+usuario, httpOption)
  }
  //mostrar todos las resenias segun el servicio id
  getReseniaServicio(servicio:string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlbase + "resenia/servicio/"+servicio, httpOption)
  }



}
