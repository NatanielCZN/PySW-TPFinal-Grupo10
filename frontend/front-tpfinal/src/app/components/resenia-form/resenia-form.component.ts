import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Resenia } from 'src/app/models/resenia';
import { ReseniaService } from 'src/app/services/resenia.service';

@Component({
  selector: 'app-resenia-form',
  templateUrl: './resenia-form.component.html',
  styleUrls: ['./resenia-form.component.css']
})
export class ReseniaFormComponent implements OnInit {

  fecha: Date;
  action: string = "";
  indice: number = 0;

  resenia!: Resenia;
  resenias!: Array<Resenia>;
  constructor(private appCom:AppComponent, private router: Router,
    private activatedRoute: ActivatedRoute,
    private reseniaService: ReseniaService) {
      this.appCom.logeado=true;
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia();
    this.fecha = new Date();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.action = "new";
      }else{
      //this.accion = "update";
      //this.obtenerProducto(params['id']);
      }
    })
  }
  ////////////
  cargar() {//produ:NgForm){
    this.resenia.fechaAlta = this.fechaHoy();
    this.reseniaService.postResenia(this.resenia).subscribe(
      (result) => {
        if(result.status==1){
          alert(result.msg);
          this.router.navigate(['resenia']);
        }
       // resenia.reset();
      },
      (error) => {
        alert(error.msg);
      }
    )
    this.router.navigate(['resenia']);
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
    }else{
        const reader = new FileReader();
        reader.onload = () => {
        let base64 = reader.result as string;
        this.resenia.imagen = base64;//almaceno en imagen el url base64
      };
      reader.readAsDataURL(files);
    }
  }
}
