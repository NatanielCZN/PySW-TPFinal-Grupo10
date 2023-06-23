import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  getReservas(): Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }
    return this._http.get(this.urlBase+"reserva",httpOptions);
  }

  crearReserva(reserva:Reserva) : Observable<any>{
    const httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    const body= JSON.stringify(reserva);
    return this._http.post(this.urlBase+"reserva/",body, httpOptions);
  }

  getReserva(_id:string) : Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("id",_id)
    }
    return this._http.get(this.urlBase+"reserva/"+_id,httpOptions);
  }

  modificarReserva(reserva:Reserva):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders(
       {
         "Content-Type": "application/json"
       }
     ),
     params:new HttpParams()
   }
   let body= JSON.stringify(reserva);
   return this._http.post(this.urlBase+"reserva/",body, httpOptions);
  }

  deleteReserva(_id:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("id",_id)
    }
    return this._http.get(this.urlBase+"reserva/"+_id,httpOptions);
  }

}
