import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Resenia } from 'src/app/models/resenia';
import { ReseniaService } from 'src/app/services/resenia.service';

@Component({
  selector: 'app-resenia-servicio',
  templateUrl: './resenia-servicio.component.html',
  styleUrls: ['./resenia-servicio.component.css']
})
export class ReseniaServicioComponent implements OnInit {
  
  resenia!: Resenia;
  resenias!: Array<Resenia>;
  idServicio!:any;
  constructor(private reseniaService: ReseniaService,
    private appCom:AppComponent, private router: Router) {
      this.appCom.logeado=true;
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia(); 
    this.obtenerReseniaServ();

  }

  ngOnInit(): void {
  }
  ////////////
  cargar() {//produ:NgForm){
    this.router.navigate(['reseniaForm',0]);
  }
  //// para mostrar por servicio
  txt="649718107225d20a45afe1b3";//!:string; 
  //idServicio:;
  obtenerReseniaServ() {
    this.reseniaService.getReseniaServicio(this.txt).subscribe(
      result => {
        this.resenias = new Array<Resenia>();
        result.forEach((element: any) => {
          this.resenia = new Resenia();
          Object.assign(this.resenia, element);
          this.resenias.push(this.resenia);
        });
        console.log(result);
      },
      error => {
        console.log("error")
      } 
    );
  }
  eliminar(id:string){
    this.reseniaService.delateResenia(id).subscribe(
      res=>{
          console.log(res);
          this.upDate();
        },error=>{
          console.log(error);
        }
    )
  }
  upDate(){
    location.reload();
  }
}

