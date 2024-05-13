import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  documento:number;
  paciente:Paciente = new Paciente();
  userLoginOn:boolean = false;

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
    this.pacienteService.ActualizarPaciente(this.documento,this.paciente).subscribe(dato => {
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
