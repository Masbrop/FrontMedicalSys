import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-lista-paciente-id',
  templateUrl: './lista-paciente-id.component.html',
  styleUrls: ['./lista-paciente-id.component.css']
})
export class ListaPacienteIdComponent implements OnInit {

  documento:number;
  idDoctor:number;
  userLoginOn:boolean = false;

  paciente:Paciente = new Paciente();
  constructor(
    private pacienteServicio:PacienteService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idDoctor = this.route.snapshot.params['idDoctor'];
    this.documento = this.route.snapshot.params['documento'];
    this.pacienteServicio.obtenerPacientePorId(this.documento).subscribe(dato => {
      this.paciente = dato;
    },error => console.log(error));
  }

  actualizarPaciente(documento:number){
    this.router.navigate(['actualizarPaciente',documento]);
  }

  eliminarPaciente(documento:number){
    this.pacienteServicio.eliminarPaciente(documento).subscribe(dato=>{
      this.router.navigate(['pacientes']);
    })
  }

  buscarPacientePorIdRedireccion(documento:number){
    this.pacienteServicio.obtenerPacientePorId(documento).subscribe(dato => {
      this.pacienteServicio.obtenerPacientePorId(this.documento).subscribe(dato => {
        this.paciente = dato;
      },error => console.log(error));
      this.router.navigate(['/pacientesid',documento]);
    },error => console.log(error));
  }

  onSubmit(documento:number){
    this.buscarPacientePorIdRedireccion(documento);
  }
}
