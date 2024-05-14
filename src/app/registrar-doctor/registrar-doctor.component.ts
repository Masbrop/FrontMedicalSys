import { Component, OnInit } from '@angular/core';
import { RegistrarDoctorService } from '../registrar-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-registrar-doctor',
  templateUrl: './registrar-doctor.component.html',
  styleUrls: ['./registrar-doctor.component.css']
})
export class RegistrarDoctorComponent implements OnInit {

  doctor:Doctor = new Doctor();

  constructor(
    private registrarDoctor:RegistrarDoctorService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  guardarDoctor(){
    console.log(this.doctor + " Validacion")
    this.registrarDoctor.registrarDoctor(this.doctor).subscribe(dato=> {
      this.router.navigate(['/iniciarSesion'])
    },error => console.log(error))
  }

  onSubmit(){
    this.guardarDoctor();
  }

}
