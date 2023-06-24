import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"usuario",component:UsuarioComponent},
  {path:"gestor",component:GestorComponent},
  {path:"admin",component:AdminComponent},
  {path: 'home', component:HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
