import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: ExperienciaService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      //cada uno de estos es un FORM CONTROL
      job: ['', [Validators.required]],
      company: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosExperiencia().subscribe(data => {
      this.experiencia = data["projects"];
    })
  }

  guardarExperiencia() {
    if (this.form.valid) {
      let experienciaEditar = new Experiencia(this.form.controls["job"].value, this.form.controls["company"].value,
        this.form.controls["start"].value, this.form.controls["end"].value);
      this.miServicio.editarDatosExperiencia(experienciaEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.experiencia = experienciaEditar;
        //deja el form control en blanco luego de guardar)
        this.form.reset();
        //para cerrar el modal usamos las propiedades del DOM
        document.getElementById("cerrarModalExperiencia")?.click();
      },
      //si no se pudo editar, sale este mensaje de error
        error => {
          alert("Ups no se pudo actualizar. Por favor, intente nuevamente o contacte al administrador");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }

  // este método está linkeado por data binding al botón de Editar en el html (para cargar el formulario cargado)
  mostrarDatosExperiencia() {
    this.form.get("job")?.setValue(this.experiencia.job);
    this.form.get("company")?.setValue(this.experiencia.company);
    this.form.get("start")?.setValue(this.experiencia.start);
    this.form.get("end")?.setValue(this.experiencia.end);
  }

  //Propiedades

  get job() {
    return this.form.get("job");
  }

  get company() {
    return this.form.get("company");
  }

  get start() {
    return this.form.get("start");
  }

  get end() {
    return this.form.get("end");
  }
}
function msg(msg: any, any: any) {
  throw new Error('Function not implemented.');
}