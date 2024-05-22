import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarDoctorService {

  private baseURL = "http://3.138.34.169/api/MedicaSys/doctor";

  constructor(
    private httpClient : HttpClient
  ) { }

  //Metodo para registrar doctores
  registrarDoctor(doctor:Doctor):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
}
