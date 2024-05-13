import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private baseURL = "http://localhost:8080/api/MedicaSys/doctor";


  login(credenciales:LoginRequest){
    console.log(credenciales);
  }

  registrarDoctor(loginRequest:LoginRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, loginRequest);
  }
}
