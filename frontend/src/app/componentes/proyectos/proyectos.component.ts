import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: ProyectoService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      proyect: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      year: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyecto().subscribe(data => {
      this.proyecto = data["proyecto"];
    })
  }

  guardarProyectos() {
    if (this.form.valid) {
      let proyectoEditar = new Proyecto(this.form.controls["proyect"].value, this.form.controls["technologies"].value,
        this.form.controls["year"].value);
      this.miServicio.editarDatosProyectos(proyectoEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.proyecto = proyectoEditar;
        this.form.reset();
        document.getElementById("cerrarModalProyectos")?.click();
      },
        error => {
          alert("Ups no se pudo actiualizar. Por favor, intente nuevamente o contacte al administrador");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }

  mostrarDatosProyectos() {
    this.form.get("proyect")?.setValue(this.proyecto.proyect);
    this.form.get("technologies")?.setValue(this.proyecto.technologies);
    this.form.get("year")?.setValue(this.proyecto.year);

  }
}
