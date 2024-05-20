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
  iddoctorString:string;
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

  onSubmit(){
    this.iddoctor = Number(this.iddoctorString);
    this.doctor["iddoctor"] = Number(this.iddoctorString);
    this.loginDoctor(this.iddoctor);
    this.loginService.UserLoginOn.subscribe({next:(userLoginOn)=>{this.userLoginOn = userLoginOn;}})
    setTimeout(() => {
    if(this.userLoginOn){
      this.router.navigate(['/listaPacientes',this.doctor["iddoctor"]]);
    }else{
      console.log('Usuario o contraseña incorrectos');
      alert('Usuario o contraseña incorrectos');
    }
    }, 100);
  }

  loginDoctor(iddoctor:number){
    this.loginService.login(this.doctor)
  }

}
