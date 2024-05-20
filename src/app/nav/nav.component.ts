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
  doctorpeticion:Doctor;
  iddoctor:number;
  nombre:string;
  documento:number;
  pacientes:Paciente[];
  paciente:Paciente = new Paciente();

  constructor(
    private loginService:LoginService,
    private pacienteServicio:PacienteService,
    private route:ActivatedRoute,
    private router:Router,
    private activateRoute:ActivatedRoute,
  ) {
    this.activateRoute.params.subscribe( parametro => {
      this.iddoctor = parametro['iddoctor']
    })
   }

  ngOnInit(): void {
    this.iddoctor = this.route.snapshot.params['iddoctor'];

    this.loginService.UserLoginOn.subscribe({next:(userLoginOn) =>{this.userLoginOn = userLoginOn;}})
    this.loginService.UserData.subscribe({next:(doctor)=>{this.doctor=doctor;}})

    if(this.userLoginOn){
      try{
        this.loginService.obtenerDoctorPorId(this.iddoctor).subscribe(dato => {
          this.doctorpeticion = dato;
          this.nombre = this.doctorpeticion.nombre;
        })
      }catch(error){
      }
    }

  }

  public ListaPacientes(){
    this.router.navigate(['/listaPacientes',this.iddoctor]);
  }

  public RegistrarPaciente(){
    this.router.navigate(['/registrarPaciente',this.iddoctor]);
  }

  public CerrarSesion(){
    this.router.navigate(['/iniciarSesion']);
    this.loginService.currentUserLoginOn.next(false);
  }
}
