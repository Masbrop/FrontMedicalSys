import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Doctor } from '../doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLoginOn:boolean = false;
  doctor:Doctor;
  iddoctor:number;
  documento:number;
  pacientes:Paciente[];
  paciente:Paciente = new Paciente();

  constructor(
    private loginService:LoginService,
    private route:ActivatedRoute,
    private pacienteServicio:PacienteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.documento = this.route.snapshot.params['documento'];
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


  botonAtras(){
    console.log("nav " + this.doctor.iddoctor)
    this.router.navigate(['/listaPacientes',this.doctor.iddoctor]);
  }

  public ListaPacientes(){
    console.log("Nav: " + this.doctor.iddoctor);
    //this.router.navigate(['/listaPacientes',this.doctor.iddoctor]);
  }



}
