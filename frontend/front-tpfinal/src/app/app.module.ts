import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UsuarioComponent,
    GestorComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

