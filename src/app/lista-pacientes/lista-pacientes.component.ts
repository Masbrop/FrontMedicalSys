import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientes:Paciente[];
  documento:number;
  iddoctor:number;
  userLoginOn:boolean = false;
  doctor:Doctor;

  constructor(
    private pacienteServicio:PacienteService,
    private loginService:LoginService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginService.UserLoginOn.subscribe({next:(userLoginOn) =>{this.userLoginOn = userLoginOn;}})
    this.loginService.UserData.subscribe({next:(doctor)=>{this.doctor=doctor;}})

    this.obtenerListaPacientesPorDoctor();

    this.route.params.subscribe(params => {
      this.iddoctor = params['iddoctor'];
    });
  }

  private obtenerListaPacientesPorDoctor(){
    try{
      this.pacienteServicio.obtenerListaPacientesPorDoctor(this.doctor.iddoctor).subscribe(dato => {
        this.pacientes = dato;
      })
    }catch(error){
    }
  }

  actualizarPaciente(documento:number){
    this.router.navigate(['actualizarPaciente',documento]);
  }

  registrarHistorialPaciente(documento:number){
    this.router.navigate(['historialPaciente',documento]);
  }

  eliminarPaciente(documento:number){
    this.pacienteServicio.eliminarPaciente(documento).subscribe(dato=>
      this.pacienteServicio.obtenerListaPacientesPorDoctor(this.doctor.iddoctor).subscribe(dato => {
        this.pacientes = dato;
      })
    )
  }

  buscarPacientePorId(documento:number){
    this.pacienteServicio.obtenerPacientePorId(documento).subscribe(dato => {
      //this.router.navigate(['/pacientes']);
    },error => console.log(error));
  }

  buscarPacientePorIdRedireccion(documento:number){
    try {
      this.pacienteServicio.obtenerPacientePorId(documento).subscribe(dato => {
        this.router.navigate(['/pacientesid',this.iddoctor,documento]);
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
