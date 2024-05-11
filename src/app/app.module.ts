import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component'
import { FormsModule } from '@angular/forms';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListaPacienteIdComponent } from './lista-paciente-id/lista-paciente-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    RegistrarPacienteComponent,
    ActualizarPacienteComponent,
    ListaPacienteIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
