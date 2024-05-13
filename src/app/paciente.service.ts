import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //Url para obtener el listado de los pacientes
  private baseURL = "http://localhost:8080/api/MedicaSys/pacientes";
  private ObtenerPacienteURL = "http://localhost:8080/api/MedicaSys/obtenerPacientes";

  constructor(
    private httpClient : HttpClient
  ) { }

  //Metodo que obtiene los pacientes
  obtenerListaPacientes():Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.ObtenerPacienteURL}`);
  }

  //Metodo que obtiene los pacientes por doctor
  obtenerListaPacientesPorDoctor(iddoctor:number):Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.ObtenerPacienteURL}/${iddoctor}`);
  }

  //Metodo para registrar pacientes
  registrarPaciente(paciente:Paciente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, paciente);
  }

  //Actualizar paciente
  ActualizarPaciente(documento:number, paciente:Paciente):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${documento}`, paciente);
  }

  //Obtener paciente por id
  obtenerPacientePorId(documento:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/${documento}`);
  }

  //Eliminar paciente
  eliminarPaciente(documento:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${documento}`);
  }

}
