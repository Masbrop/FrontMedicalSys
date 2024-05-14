import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {

  documento:number;
  paciente:Paciente = new Paciente();
  userLoginOn:boolean = false;
  dato = {
    documento:0,
    nombre:"",
    edad:0,
    telefono:0,
    direccion:"",
    historial: ""
  };

  constructor(
    private pacienteService:PacienteService,
    private router:Router,
    private route:ActivatedRoute,
    private loginService:LoginService,

  ) { }

  ngOnInit(): void {
    this.documento = this.route.snapshot.params['documento'];
    this.pacienteService.obtenerPacientePorId(this.documento).subscribe(dato =>{
    this.paciente = dato;
    },error => console.log(error));

    this.loginService.UserLoginOn.subscribe(
      {
        next:(userLoginOn) =>{
          this.userLoginOn = userLoginOn;
        }
      }
    )
  }

  actualizarPaciente(){
    this.pacienteService.ActualizarHistorialPaciente(this.documento,this.paciente).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['/listaPacientes',this.paciente.iddoctor]);
    },error => console.log(error));
  }

  onSubmit(){
    this.actualizarPaciente();
  }

  botonAtras(){
    this.router.navigate(['/listaPacientes',this.paciente.iddoctor]);
  }
}
