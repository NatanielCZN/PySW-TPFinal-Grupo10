import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaformComponent } from './components/reservaform/reservaform.component';

const routes: Routes = [
  {path: 'reserva', component:ReservaComponent},
  {path: 'reservaForm/:id', component:ReservaformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
