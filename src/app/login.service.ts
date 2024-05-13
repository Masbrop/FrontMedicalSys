import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError } from 'rxjs';
import { Doctor } from './doctor';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  doctor:Doctor;
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<Doctor> = new BehaviorSubject<Doctor>({iddoctor:0, contrasena:'', nombre: '', autenticado: false})
  data = {
    iddoctor: 1,
    nombre: "",
    contrasena: "1",
    autenticado: false
  };

  constructor(
    private httpClient : HttpClient
  ) { }

  private baseURL = "http://localhost:8080/api/MedicaSys/doctor";

  login(doctor:Doctor){
    return this.httpClient.post(`${this.baseURL}/${doctor.iddoctor}`, doctor).pipe(
      tap( (data) => {
        this.currentUserData.next(doctor);
      })
    ).subscribe(
      (data: any )=> {
        if(data["autenticado"]){
          console.log("Inicia validacion de formulario ", data["autenticado"]);
          this.currentUserLoginOn.next(true);
        }
      }
    )
  }

  /*
  login(doctor:Doctor){
    return this.httpClient.post(`${this.baseURL}/${doctor.iddoctor}`, doctor).pipe(
      tap( (data) => {
        console.log(doctor)
        this.currentUserData.next(doctor);
        this.currentUserLoginOn.next(true);
        console.log(doctor)
      })
    ).subscribe(
      data => {
        console.log(doctor)
        console.log("Inicia validacion de formulario ", data)
      }
    )
  }
  */

  get UserData():Observable<Doctor>{
    return this.currentUserData.asObservable();
  }

  get UserLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  /*
  login(doctor:Doctor):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${doctor.documento}`).pipe(
      tap( (doctor) => {
        this.currentUserData.next(doctor);
        this.currentUserLoginOn.next(true);
      })
    );
  }

  get UserLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  */

}
