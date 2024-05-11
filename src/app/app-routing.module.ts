import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListaPacienteIdComponent } from './lista-paciente-id/lista-paciente-id.component';

const routes: Routes = [
  {path : 'pacientes', component:ListaPacientesComponent},
  {path : '', component:ListaPacientesComponent, pathMatch:'full'},
  {path : 'registrarPaciente', component:RegistrarPacienteComponent},
  {path : 'actualizarPaciente/:documento', component:ActualizarPacienteComponent},
  {path : 'pacientesid/:documento', component:ListaPacienteIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
