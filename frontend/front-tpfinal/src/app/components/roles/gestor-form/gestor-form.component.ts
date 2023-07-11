import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-form',
  templateUrl: './gestor-form.component.html',
  styleUrls: ['./gestor-form.component.css']
})
export class GestorFormComponent implements OnInit {

  gestor!: Gestor;

  constructor(private gestorService: GestorService, private router: Router, private route: ActivatedRoute) {
    this.gestor = new Gestor();
  }

  ngOnInit(): void {
  }

  /**
   * Guarda un Gestor en la BDD
   * @param gestorForm 
   */
  guardarGestor(gestorForm: NgForm): void {
    this.gestor.calcularEdad();

    this.gestorService.postGestor(this.gestor)
      .subscribe(
        (res: any) => {
          console.log(res);

          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      )
  }

  volverAlInicio(): void {
    this.router.navigate(['./home']);
  }
}
