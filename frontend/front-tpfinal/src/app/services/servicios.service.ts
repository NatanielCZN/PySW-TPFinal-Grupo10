import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  //me devuelve los servicios que se encuentran en una localidad determinada
  getServicios(ubicacion:string): Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    
    }
    return this._http.get("http://localhost:3000/api/servicio/ubicacion?ubicacion="+ubicacion,httpOptions);
  }

  getServicio(_id:string) : Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("id",_id)
    }
    return this._http.get(this.urlBase+"servicio/"+_id,httpOptions);
  }

  crearServicio(servicio:Servicio) : Observable<any>{
    const httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(servicio);
    return this._http.post(this.urlBase+"servicio",body, httpOptions);
  }

 
  modificarServicio(servicio:Servicio):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders(
       {
         "Content-Type": "application/json"
       }
     ),
     params:new HttpParams()
   }
   let body= JSON.stringify(servicio);
   return this._http.post(this.urlBase+"servicio/",body, httpOptions);
  }

  deleteServicio(_id:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("id",_id)
    }
    return this._http.get(this.urlBase+"servicio/"+_id,httpOptions);
  }
}
