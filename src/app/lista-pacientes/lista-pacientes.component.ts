import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientes:Paciente[];
  documento:number;
  idDoctor:number;
  userLoginOn:boolean = false;

  constructor(
    private pacienteServicio:PacienteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerPaciente();
  }

  private obtenerPaciente(){
    this.pacienteServicio.obtenerListaPacientes().subscribe(dato => {
      this.pacientes = dato;
    })
  }

  actualizarPaciente(documento:number){
    this.router.navigate(['actualizarPaciente',documento]);
  }

  eliminarPaciente(documento:number){
    this.pacienteServicio.eliminarPaciente(documento).subscribe(dato=>
      this.pacienteServicio.obtenerListaPacientes().subscribe(dato => {
        this.pacientes = dato;
      })
    )
  }

  buscarPacientePorId(documento:number){
    this.pacienteServicio.obtenerPacientePorId(documento).subscribe(dato => {
      this.router.navigate(['/pacientes']);
    },error => console.log(error));
  }

  buscarPacientePorIdRedireccion(documento:number){
    try {
      this.pacienteServicio.obtenerPacientePorId(documento).subscribe(dato => {
        this.router.navigate(['/pacientesid',documento]);
      },error => {
        console.log('No se encontro el paciente con documento: ' + documento);
        alert('No se encontro el paciente con documento: ' + documento);

      });
    }catch (error) {
    }
  }

  onSubmit(documento:number){
    this.buscarPacientePorId(documento);
  }

}
