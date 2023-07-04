import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Resenia } from 'src/app/models/resenia';
import { Servicio } from 'src/app/models/servicio';
import { Usuario } from 'src/app/models/usuario.model';
import { ReseniaService } from 'src/app/services/resenia.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-resenia-form',
  templateUrl: './resenia-form.component.html',
  styleUrls: ['./resenia-form.component.css']
})
export class ReseniaFormComponent implements OnInit {

  fecha: Date;
   
   accion: string = "";
  indice: number = 0;

  resenia!: Resenia;
  resenias!: Array<Resenia>;

  id!: any;
  servicio!: any;
  usuario!: Usuario;
  usuarios!:Array<Usuario>;
  servicios!: Array<Servicio>;
  constructor(private appCom: AppComponent,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reseniaService: ReseniaService,
    private usuarioService: UsuarioService,
    private serviceServicio: ServiciosService) {

    this.appCom.logeado = true;
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia();
    this.usuario= new Usuario();
    this.id=sessionStorage.getItem('userId');
    this.cargarUsuario();
    this.cargarServicio();
    this.fecha = new Date();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
      this.accion = "update";
       this.alter(params['id']);
      }
    })
  }
  ////////////
  cargar() {//produ:NgForm){
    this.resenia.fechaAlta = this.fechaHoy();
    this.resenia.usuario=this.id;
    this.servicio="649718107225d20a45afe1b3";

    this.resenia.servicio=this.servicio;
    this.reseniaService.postResenia(this.resenia).subscribe(
      (result) => {
        if (result.status == 1) {
          alert(result.msg);
          this.router.navigate(['reseniaSer']);
        }
        // resenia.reset();
      },
      (error) => {
        alert(error.msg);
      }
    )
    this.router.navigate(['reseniaSer']);
  }
  ///////
  fechaHoy() {
    return new Date().toISOString().substring(0, 10);
  }
  onFileSelected(event: any) {
    const files = event.target.files[0];
    if (files.size > 80000) {//limite de tamaño de imagen
      alert('El tamaño  de imagen maximo es 80 KB');
      event.target.value = null;
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        this.resenia.imagen = base64;//almaceno en imagen el url base64
      };
      reader.readAsDataURL(files);
    }
  }
  ////////////////////////
  cargarUsuario(){//obtener usuario
    this.usuarioService.getusuario(this.id).subscribe(
      (res:any)=>{
        Object.assign(this.usuario,res);
      }
    )
  }
  cargarServicio(){//obtener servicio
   /* this.serviceServicio.getServicio(this.id).subscribe(
      (res:any)=>{
        Object.assign(this.servicio,res);
      }
    )*/
    this.serviceServicio.getServicios("649718107225d20a45afe1b3").subscribe(
      res=>{
        let servicio = new Servicio();
        res.forEach(
          (s:any) => {
            Object.assign(servicio,s);
            this.servicios.push(servicio);
            servicio= new Servicio();
          }
        );
      },error=>{
        console.log("error Al cargar Servicios");
      }
    )
  }
  public cancelar(){    
    this.router.navigate(['reseniaSer']);
  }
  public cancelarUs(){    
    this.router.navigate(['reseniaUs']);
  }
  ////////////////
  modificar( ){
    this.reseniaService.editarResenia(this.resenia).subscribe(
      (result:any)  => {
        // La reseña se ha editado correctamente
        if(result.status == 1){
          //console.log(result);  
          console.log("Se ha actualizado un producto")
        }
      },  
      (error) => {
        // Se produjo un error al editar la reseña
       // console.error(error);
        //alert(error.msg);
       // console.error('Error al modificar reseña:', error);
      }
    );
    this.router.navigate(['reseniaUs']);
  }
    public alter(id: string){ //muestra los datos de un id
    this.reseniaService.getResenia(id).subscribe(
      result => {
        console.log(result);
        Object.assign(this.resenia, result);
      //console.log(this.resenia)
      },
      error=>{
        console.error(error); 
      }
    )
  }
}
