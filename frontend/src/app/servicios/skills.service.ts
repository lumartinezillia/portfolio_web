import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../entidades/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpService: HttpClient) { }

  obtenerDatosSkills(): Observable<any> {
    return this.httpService.get('./assets/data/skills.json');
  }

  editarDatosSkills(skills: Skill): Observable<any> {
    return this.httpService.post('http://localhost:3000/posts', skills);
  }
}
