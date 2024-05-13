import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListaPacienteIdComponent } from './lista-paciente-id/lista-paciente-id.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    RegistrarPacienteComponent,
    ActualizarPacienteComponent,
    ListaPacienteIdComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
