import { Component, OnInit } from '@angular/core';
import { Resenia } from 'src/app/models/resenia';
import { ReseniaService } from 'src/app/services/resenia.service';

@Component({
  selector: 'app-resenia',
  templateUrl: './resenia.component.html',
  styleUrls: ['./resenia.component.css']
})
export class ReseniaComponent implements OnInit {
  fecha: Date;
  action: string = "";
  indice: number = 0;

  resenia!: Resenia;
  resenias!: Array<Resenia>;
  constructor(private reseniaService: ReseniaService) {
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia();
    this.fecha = new Date();
    this.mostrarResenias();
  }

  ngOnInit(): void {
  }
  ////////////
  cargar() {//produ:NgForm){
    this.reseniaService.postResenia(this.resenia).subscribe(
      (result) => {

      },
      (error) => {
        alert(error.msg);
      }
    )
  }
  ////////////
  mostrarResenias() {
    this.resenia.fechaAlta=this.fechaHoy();
    this, this.reseniaService.getMostarResenia().subscribe(
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
      });
  }
  ///////
  fechaHoy() {
    return new Date().toISOString().substring(0, 10);
  }
}
