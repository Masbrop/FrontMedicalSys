import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginRequest } from '../loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    usuario:['',Validators.required],
    contraseña:['',Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private loginService:LoginService
  ) {}

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.registrarDoctor(this.loginForm.value)
      console.log(this.loginForm.value)
      //this.router.navigate(['/pacientes'])
      this.loginForm.reset();
    }else{
      alert("Error al ingresar los datos");
    }
  }

}
