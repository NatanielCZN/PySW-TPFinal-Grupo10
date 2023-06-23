import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './component/ciudades/ciudades.component';


const routes: Routes = [
  {path:"buscar", component:CiudadesComponent},
  {path:"", redirectTo: '/buscar' , pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
