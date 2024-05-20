import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListaPacienteIdComponent } from './lista-paciente-id/lista-paciente-id.component';
import { LoginComponent } from './login/login.component';
import { RegistrarDoctorComponent } from './registrar-doctor/registrar-doctor.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';

const routes: Routes = [
  {path : '', component:LoginComponent, pathMatch:'full'},
  {path : 'iniciarSesion', component:LoginComponent},
  {path : 'registrarDoctor', component:RegistrarDoctorComponent},
  {path : 'listaPacientes/:iddoctor', component:ListaPacientesComponent},
  {path : 'pacientesid/:iddoctor/:documento', component:ListaPacienteIdComponent},
  {path : 'registrarPaciente/:documento', component:RegistrarPacienteComponent},
  {path : 'actualizarPaciente/:documento', component:ActualizarPacienteComponent},
  {path : 'historialPaciente/:documento', component:HistorialPacienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
