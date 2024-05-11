import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  paciente:Paciente = new Paciente();

  constructor(
    private pacienteServicio:PacienteService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  guardarPaciente(){
    this.pacienteServicio.registrarPaciente(this.paciente).subscribe(dato=> {
      console.log(dato);
      this.router.navigate(['/pacientes'])
    },error => console.log(error))
  }

  onSubmit(){
    this.guardarPaciente();
  }

  botonAtras(){
    this.router.navigate(['/pacientes']);
  }
}
