import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  paciente:Paciente = new Paciente();
  userLoginOn:boolean = false;
  iddoctor:number;
  doctor:Doctor = new Doctor();

  constructor(
    private pacienteServicio:PacienteService,
    private loginService:LoginService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iddoctor = this.route.snapshot.params['documento'];
    this.loginService.UserLoginOn.subscribe(
      {
        next:(userLoginOn) =>{
          this.userLoginOn = userLoginOn;
        }
      }
    )
    this.loginService.UserData.subscribe(
      {
        next:(doctor)=>{
          this.doctor=doctor;
        }
      }
    )

  }

  guardarPaciente(){
    this.paciente.iddoctor = this.iddoctor;
    this.pacienteServicio.registrarPaciente(this.paciente).subscribe(dato=> {
      this.router.navigate(['/listaPacientes',this.paciente.iddoctor])
    },error => console.log(error))
  }

  onSubmit(){
    this.guardarPaciente();
  }

  botonAtras(){
    this.router.navigate(['/listaPacientes',this.iddoctor]);
  }
}
