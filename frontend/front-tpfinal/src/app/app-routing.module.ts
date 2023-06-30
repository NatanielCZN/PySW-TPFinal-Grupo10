import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ReseniaComponent } from './components/resenia/resenia.component';
import { ReseniaFormComponent } from './components/resenia-form/resenia-form.component';

import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

import { GestorFormComponent } from './components/gestor-form/gestor-form.component';
import { LocalidadUserComponent } from './components/localidad-user/localidad-user.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "gestor", component: GestorComponent },
  { path: "gestor-form/:id", component: GestorFormComponent },
  { path: "admin", component: AdminComponent },
  { path: 'home', component: HomeComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'ciudad', component: CiudadesComponent },

  
  { path: 'resenia', component: ReseniaComponent },
  {path: 'reseniaForm/:id', component: ReseniaFormComponent},
  {path:"", redirectTo:"resenia", pathMatch:"full"},

  {path:'usuarioForm',component:FormUsuarioComponent},

  { path: 'localidad-user/:nombre/:id', component: LocalidadUserComponent },
  { path: 'resenia', component: ReseniaComponent },
  { path: 'reseniaForm/:id', component: ReseniaFormComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'reservaForm/:id', component: ReservaFormComponent }
  //{ path: "", redirectTo: "resenia", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
