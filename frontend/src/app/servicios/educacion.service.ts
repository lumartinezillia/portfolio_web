import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private httpService: HttpClient) { }

  obtenerDatosEducacion():Observable<any>{
    return this.httpService.get('./assets/data/educacion.json');
  }

  editarDatosEducacion(educacion: Educacion): Observable<any> {
    return this.httpService.post('http://localhost:3000/posts', educacion);
  }
}
