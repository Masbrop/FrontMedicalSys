import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Doctor } from '../doctor';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { LoginRequest } from '../loginRequest';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  paciente:Paciente = new Paciente();
  doctor:Doctor = new Doctor();
  iddoctor:number;
  userLoginOn:boolean = false;
  data = {
    iddoctor: 0,
    nombre: "",
    contrasena: "",
    autenticado: false
  };


  constructor(
    private loginService:LoginService,
    private router:Router,
    private pacienteServicio:PacienteService
  ) {}

  ngOnInit(): void {
    this.loginService.UserData.subscribe(
      {
        next:(doctor)=>{
          this.doctor=doctor;
        }
      }
    )
  }

  onSubmit(){
    this.loginDoctor(this.iddoctor);
    console.log("Validacion login " + this.doctor["iddoctor"])
    this.router.navigate(['/listaPacientes',this.doctor["iddoctor"]]);
  }

  loginDoctor(iddoctor:number){
    this.loginService.login(this.doctor)
  }

}
