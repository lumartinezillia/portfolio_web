import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpService:HttpClient) { }

  obtenerDatosProyecto(): Observable<any>{
    return this.httpService.get('./assets/data/proyectos.json');
  }

  editarDatosProyectos(proyecto: Proyecto): Observable<any> {
    return this.httpService.post('http://localhost:3000/posts', proyecto);
  }
}
