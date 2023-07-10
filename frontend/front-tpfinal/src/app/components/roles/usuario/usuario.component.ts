import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Provincia } from 'src/app/models/provincia';
import { Reserva } from 'src/app/models/reserva';
import { Usuario } from 'src/app/models/usuario.model';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
   id:any;
   usuario:Usuario;
   tipo:any;
   seleccion!: string;
   provincia!: Provincia;  //OBJ tipo Provincia que contiene informacion de la misma
   localidad!: Provincia;  //OBJ tipo Provincia que contiene solo el nombre y id de las localidades de una Provincia
   mostrarCard = false;
   localidades!: Array<Provincia>;
   reservasCliente!: Array<Reserva>;  // guarda las reservas del cliente logeado
   imagenes: string[] = [];
   provincias = [{ id: 1, name: "Buenos Aires" },{ id: 2, name: "Catamarca" },
   { id: 3, name: "Chaco" },{ id: 4, name: "Chubut" },
   { id: 5, name: "Cordoba" },{ id: 6, name: "Corrientes" },
   { id: 7, name: "Entre Rios" },{ id: 8, name: "Formosa" },
   { id: 9, name: "Jujuy" },{ id: 10, name: "La Pampa" },
   { id: 11, name: "La Rioja" },{ id: 12, name: "Mendoza" },
   { id: 13, name: "Misiones" },{ id: 14, name: "Neuquen" },
   { id: 15, name: "Rio Negro" },{ id: 16, name: "Salta" },
   { id: 17, name: "San Juan" },{ id: 18, name: "San Luis" },
   { id: 19, name: "Santa Cruz" },{ id: 20, name: "Santa Fe" },
   { id: 21, name: "Santiago del Estero" },{ id: 22, name: "Tierra del Fuego" },
   { id: 5, name: "Tucuman" }
   ];
 

  constructor(private appCom:AppComponent,private servicioU:UsuarioService, private _http: HttpClient,private reservaService:ReservaService, private ciudadService: CiudadesService, private router: Router) {
    this.id= sessionStorage.getItem("userId"); 
    this.appCom.logeado=true;
    this.usuario=new Usuario();
    this.provincia = new Provincia();
    this.localidades = new Array<Provincia>();
    this.reservasCliente = new Array<Reserva>();
    this.mostrarReservas();
   }

  ngOnInit(): void {
    this.id= sessionStorage.getItem("userId"); 
    this.tipo=sessionStorage.getItem("tipo");
    this.getUsuario();

     /////////maps
     const script = document.createElement('script');
     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCdi7hQUPe89nyScSyO1SijO1UJDvSILkg&callback=initMap`;
     script.defer = true;
     script.async = true;
     script.onload = () => {
       this.initMap(this.provincia);
     };
     document.body.appendChild(script);
  }
///////
initMap(provincia:Provincia) {
  const lat = parseFloat(provincia.lat);//transforma las coordenadas de
  const long = parseFloat(provincia.long);//la provincia q esta en string a number
    

  const mapOptions = {//provincia.lat,provincia.long
    center: {lat: lat, lng:  long},//{ lat: -34.397, lng: 150.644 }, // Coordenadas del centro del mapa
    zoom: 6 // Nivel de zoom inicial
  };

  const mapElement = document.getElementById('map');//para referenciar en html
  if (mapElement) {
    const map = new google.maps.Map(mapElement, mapOptions);
  } else {
    console.error('No se encontró el elemento con ID "mapa".');
  }
}
///////
  getUsuario(){
      this.servicioU.getusuario(this.id)
      .subscribe(
        (res:any)=>{
          Object.assign(this.usuario,res);
         console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
  }

  mostrarReservas() {
    this.reservasCliente = new Array<Reserva>();
    console.log(this.id);
    this.reservaService.getReservaUsuario(this.id as string).subscribe(
      (result) => {
        let unaReserva = new Reserva();
        console.log(result);
        // Recorrer cada objeto en result y agregarlo al array reservasCliente
        result.forEach((element: any) => {
          Object.assign(unaReserva, element);
          this.reservasCliente.push(unaReserva);
          unaReserva = new Reserva();
        });
      },
      error => { alert("Error en la petición"); }
    );
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
        this.initMap(this.provincia);//manda info de la provincia
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

}
////
declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = function() {
  // Implementación de la función
};
