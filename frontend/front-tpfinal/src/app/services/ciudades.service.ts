import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CiudadesService {


  urlbase:string="https://apis.datos.gob.ar/georef/api/"

  constructor(private _http: HttpClient) { }

  
  public getProvincias(nombre:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase+"provincias?nombre="+nombre,httpOptions);  
  }

  public getLocalidades(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase+"municipios?provincia="+id+"&campos=id,nombre&max=100",httpOptions);  
  }

  public getImagesPixels():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()

      
    }
     return this._http.get("https://api.pixels.com/v1/search",httpOptions);  
  }
}

