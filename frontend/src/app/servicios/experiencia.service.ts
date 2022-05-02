import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private httpService: HttpClient) {
  }

  obtenerDatosExperiencia(): Observable<any> {
    return this.httpService.get('./assets/data/experiencia.json');
  }

  editarDatosExperiencia(experiencia: Experiencia):Observable<any> {
    return this.httpService.post('http://localhost:3000/posts', experiencia);

  }
}
