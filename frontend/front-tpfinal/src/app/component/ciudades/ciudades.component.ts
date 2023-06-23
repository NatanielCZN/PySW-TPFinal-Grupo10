import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { HttpClient } from '@angular/common/http';
import { Provincia } from 'src/app/models/provincia';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  seleccion!:string;
  provincia!:Provincia;
  localidad!:Provincia;
  localidades!: Array<Provincia>;
  
  provincias = [{ id: 1, name: "Jujuy" },
  { id: 2, name: "Salta" }, { id: 3, name: "Tucuman" },
  { id: 4, name: "Sgo. del Estero" }, { id: 5, name: "Buenos Aires" },
  { id: 6, name: "Rio Negro" }, { id: 7, name: "Mendoza" },
 ];


  constructor(private _http: HttpClient,private ciudadService: CiudadesService) {
    this.provincia = new Provincia();
    this.localidades = new Array<Provincia>();
   }


  consultarProvincia(nombre: string) {
    this.ciudadService.getProvincias(nombre).subscribe(
      (result) => {
        this.localidades = new Array<Provincia>();
        this.provincia.nombre = result.provincias[0].nombre;
        this.provincia._id = result.provincias[0].id;
        this.provincia.lat = result.provincias[0].centroide.lat;
        this.provincia.long = result.provincias[0].centroide.lon;
        this.cargarLocalidades(this.provincia._id);
      },
      error => { alert("Error en la petición"); })
  }

  cargarLocalidades(id: string) {
    this.ciudadService.getLocalidades(id).subscribe(
      (result) => {
        for (let i=0; i != -1; i++){
        this.localidad = new Provincia();
        this.localidad.nombre = result.municipios[i].nombre;
        this.localidad._id = result.municipios[i].id;

        this.localidades.push(this.localidad);
    }
      },
      error => { alert("Error en la petición"); })
  }
  ngOnInit(): void {
  }

}
