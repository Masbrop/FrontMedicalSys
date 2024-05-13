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
  currentUserDataGeneral: BehaviorSubject<Doctor> = new BehaviorSubject<Doctor>({iddoctor:0, contrasena:'', nombre: '', autenticado: false})

  data = {
    iddoctor: 0,
    nombre: "",
    contrasena: "",
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
          this.currentUserLoginOn.next(true);

        }
      }
    )
  }

  get UserData():Observable<Doctor>{
    return this.currentUserData.asObservable();
  }

  get UserDataGeneral():Observable<Doctor>{
    return this.currentUserDataGeneral.asObservable();
  }

  get UserLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}
