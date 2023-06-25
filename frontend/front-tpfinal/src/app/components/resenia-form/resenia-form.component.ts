import { Component, OnInit } from '@angular/core';
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
  constructor(private reseniaService: ReseniaService) {
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia();
    this.fecha = new Date();
  }

  ngOnInit(): void {
  }
  ////////////
  cargar() {//produ:NgForm){
    this.resenia.fechaAlta = this.fechaHoy();
    this.reseniaService.postResenia(this.resenia).subscribe(
      (result) => {

      },
      (error) => {
        alert(error.msg);
      }
    )
  }
  ///////
  fechaHoy() {
    return new Date().toISOString().substring(0, 10);
  }
}
