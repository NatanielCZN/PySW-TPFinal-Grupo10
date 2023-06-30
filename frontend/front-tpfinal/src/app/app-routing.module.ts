import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/roles/login/login.component';
import { UsuarioComponent } from './components/roles/usuario/usuario.component';
import { GestorComponent } from './components/roles/gestor/gestor.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ReseniaComponent } from './components/resenia/resenia.component';
import { ReseniaFormComponent } from './components/resenia-form/resenia-form.component';
import { GestorFormComponent } from './components/roles/gestor-form/gestor-form.component';
import { LocalidadUserComponent } from './components/localidad-user/localidad-user.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { UsuarioFormComponent } from './components/roles/usuario-form/usuario-form.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario-form/:id', component: UsuarioFormComponent },
  { path: "gestor", component: GestorComponent },
  { path: "gestor-form/:id", component: GestorFormComponent },
  { path: "admin", component: AdminComponent },

  { path: 'home', component: HomeComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'ciudad', component: CiudadesComponent },

  { path: 'resenia', component: ReseniaComponent },
  { path: 'reseniaForm/:id', component: ReseniaFormComponent },
  { path: "", redirectTo: "resenia", pathMatch: "full" },

  { path: 'localidad-user/:nombre/:id', component: LocalidadUserComponent },
  { path: 'resenia', component: ReseniaComponent },
  { path: 'reseniaForm/:id', component: ReseniaFormComponent },
  //{ path: "", redirectTo: "resenia", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
