import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-gestor-form',
  templateUrl: './gestor-form.component.html',
  styleUrls: ['./gestor-form.component.css']
})
export class GestorFormComponent implements OnInit {

  gestor!: Gestor;

  constructor(private gestorService: GestorService, private router: Router) {
    this.gestor = new Gestor();
  }

  ngOnInit(): void {
  }

  agregarGestor(gestorForm: NgForm): void {

  }
}
