import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;
  constructor(private miServicio: PersonaService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona = data["Persona"];
    });
}
}
