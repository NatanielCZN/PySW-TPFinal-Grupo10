import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservaform',
  templateUrl: './reservaform.component.html',
  styleUrls: ['./reservaform.component.css']
})
export class ReservaformComponent implements OnInit {

  reserva!: Reserva;

  constructor(private reservaService: ReservaService,
    private activatedRoute: ActivatedRoute) { }

  accion: string = '';
  ngOnInit(): void {

  }

  

}
