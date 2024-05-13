import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-lista-paciente-id',
  templateUrl: './lista-paciente-id.component.html',
  styleUrls: ['./lista-paciente-id.component.css']
})
export class ListaPacienteIdComponent implements OnInit {

  documento:number;
  iddoctor:number;
  userLoginOn:boolean = false;

  paciente:Paciente = new Paciente();
  constructor(
    private pacienteServicio:PacienteService,
    private router:Router,
    private loginService:LoginService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iddoctor = this.route.snapshot.params['iddoctor'];
    this.documento = this.route.snapshot.params['documento'];
    this.pacienteServicio.obtenerPacientePorId(this.documento).subscribe(dato => {
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
