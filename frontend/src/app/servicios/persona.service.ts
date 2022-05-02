import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpService: HttpClient) {
    console.log("El servicio mi portfolio está corriendo");
  }

  obtenerDatosPersona(): Observable<any> {
    return this.httpService.get('./assets/data/persona.json');
  }

  //se manda la dir al server/db y el objeto que contiene los datos.
  editarDatosPersona(persona: Persona): Observable<any> {
    return this.httpService.post('http://localhost:3000/posts', persona);
  }

}
