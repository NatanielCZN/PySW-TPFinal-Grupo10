import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-localidad-user',
  templateUrl: './localidad-user.component.html',
  styleUrls: ['./localidad-user.component.css']
})
export class LocalidadUserComponent implements OnInit {

  nombre:string=""
  id:string=""
  servicios!:Array<Servicio>;

  constructor(private route: ActivatedRoute, private router: Router, private serviceServicios:ServiciosService) {

    
   }


  
  cargarServicios(id:string){
    this.serviceServicios.getServicios(id).subscribe(
      result =>{
        console.log(result)
        this.servicios = new Array<Servicio>();
        let unaServicio:Servicio= new Servicio();
          result.forEach((element:any) => {
          Object.assign(unaServicio,element)
          this.servicios.push(unaServicio)
          unaServicio = new Servicio();
        });
      } ,
      error=>{
      }
    )
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
       this.id = params['id'];
       this.cargarServicios(this.id);
    });
  }
  
  obtenerReseniaServ(servicio: Servicio) {//produ:NgForm){
    this.router.navigate(['reseniaSer',servicio._id]);
  }
  cargar(servicio: Servicio) {//produ:NgForm){
    this.router.navigate(['reseniaForm',0,servicio._id]);
  }

}
