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

  private baseURL = "http://3.138.34.169/api/MedicaSys/doctor";

  login(doctor:Doctor){
    return this.httpClient.post(`${this.baseURL}/${doctor.iddoctor}`, doctor).pipe(
      tap( (data) => {
        this.currentUserData.next(doctor);
      })
    ).subscribe(
      (data: any )=> {
        if(data["autenticado"]){
          this.currentUserLoginOn.next(true);
        }})
  }

  //Obtener doctor por id
  obtenerDoctorPorId(documento:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${documento}`);
  }

  logout(){
    this.currentUserLoginOn.next(false);
  }

  get UserData():Observable<Doctor>{
    return this.currentUserData.asObservable();
  }

  get UserLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get UserDataGeneral():Observable<Doctor>{
    return this.currentUserDataGeneral.asObservable();
  }
}
