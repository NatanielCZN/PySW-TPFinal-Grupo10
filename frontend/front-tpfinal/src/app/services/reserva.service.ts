import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  Url:string="http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  getReservas(): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }
    return this._http.get(this.Url+"reserva",httpOptions);
  }

  crearReserva(reserva:Reserva) : Observable<any>{
    let httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(reserva);
    return this._http.post(this.Url+"reserva/",body, httpOptions);
  }
}
