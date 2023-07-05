import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { LoginComponent } from './components/roles/login/login.component';
import { LoginService } from './services/login.service';
import { UsuarioComponent } from './components/roles/usuario/usuario.component';
import { GestorComponent } from './components/roles/gestor/gestor.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ReseniaComponent } from './components/resenia/resenia.component';
import { ReseniaFormComponent } from './components/resenia-form/resenia-form.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { GestorFormComponent } from './components/roles/gestor-form/gestor-form.component';
import { LocalidadUserComponent } from './components/localidad-user/localidad-user.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { UsuarioFormComponent } from './components/roles/usuario-form/usuario-form.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioDatosComponent } from './components/roles/usuario-datos/usuario-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UsuarioComponent,
    GestorComponent,
    AdminComponent,
    HomeComponent,
    CiudadesComponent,
    ReseniaComponent,
    ReseniaFormComponent,
    UsuarioFormComponent,
    GestorFormComponent,
    LocalidadUserComponent,
    UsuarioFormComponent,
    ServicioComponent,
    ServicioFormComponent,
    ReservaComponent,
    ReservaFormComponent,
    UsuarioDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

