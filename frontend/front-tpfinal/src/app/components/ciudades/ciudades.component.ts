import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { HttpClient } from '@angular/common/http';
import { Provincia } from 'src/app/models/provincia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  seleccion!: string;
  provincia!: Provincia;  //OBJ tipo Provincia que contiene informacion de la misma
  localidad!: Provincia;  //OBJ tipo Provincia que contiene solo el nombre y id de las localidades de una Provincia
  mostrarCard = false;
  localidades!: Array<Provincia>;
  imagenes: string[] = [];


  provincias = [{ id: 1, name: "Jujuy" },
  { id: 2, name: "Salta" }, { id: 3, name: "Tucuman" },
  { id: 4, name: "Santiago del Estero" }, { id: 5, name: "Buenos Aires" },
  { id: 6, name: "Rio Negro" }, { id: 7, name: "Mendoza" },
  { id: 8, name: "Chubut" }, { id: 9, name: "Misiones" },
  ];


  constructor(private _http: HttpClient, private ciudadService: CiudadesService, private router: Router) {
    this.provincia = new Provincia();
    this.localidades = new Array<Provincia>();
  }

  mostrarTarjeta() {
    this.mostrarCard = true;
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
        this.buscarImagen(this.provincia);
        this.cargarClima(this.provincia);
        this.mostrarTarjeta();
      },
      error => { alert("Error en la petición"); })
  }

  cargarLocalidades(id: string) {
    this.ciudadService.getLocalidades(id).subscribe(
      (result) => {
        if (result && result.municipios) {
          for (let i = 0; i < result.municipios.length; i++) {
            this.localidad = new Provincia();
            this.localidad.nombre = result.municipios[i].nombre;
            this.localidad._id = result.municipios[i].id;
            this.localidades.push(this.localidad);
          }
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada.');
        }
      },
      error => { alert("Error en la petición"); }
    );
  }
  

  buscarImagen(provincia: Provincia) {
    this.ciudadService.buscarImagenPorPalabraClave(provincia.nombre).subscribe(
      (response) => {
        // Aquí puedes manejar la respuesta de la API de Unsplash
        var i;
        console.log(response);
        this.imagenes= [];
        for (const resultado of response.results) {
          const imagen = resultado.urls.small;
          this.imagenes.push(imagen);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cargarClima(provincia:Provincia) {
    this.ciudadService.getClima(provincia.lat,provincia.long).subscribe(
      (result) => {
        console.log(result);
        this.provincia.clima = "temp max : " +result.ClimateDataMonth[7].tmax+ ", temp min : "+result.ClimateDataMonth[7].tmin;
      },
      error => { alert("Error en la petición"); })
  }


  seleccionarLocalidad(localidad:Provincia){
    this.router.navigate(['localidad-user',localidad.nombre,localidad._id]);
  }
  

  ngOnInit(): void {
  }

}
