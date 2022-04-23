import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  obtenerDatosProyecto(): Observable<any>{
    return this.http.get('./assets/data/proyectos.json');
  }
}
