import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;
  usuarioAutenticado:boolean=true;
  form!: FormGroup;
  
  constructor(private miServicio: EducacionService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      school: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(dataRecibida => {
      console.log(dataRecibida);
      this.educacion = dataRecibida["education"];
    })
  }
  guardarEducacion() {
    if (this.form.valid) {
      let educacionEditar = new Educacion(this.form.controls["title"].value, this.form.controls["school"].value,
        this.form.controls["start"].value, this.form.controls["end"].value);
      this.miServicio.editarDatosEducacion(educacionEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.educacion = educacionEditar;
        this.form.reset();
        document.getElementById("cerrarModalEducacion")?.click();
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

  // en el get va el nombre del form control y en set value el del servicio
  mostrarDatosEducacion() {
    this.form.get("title")?.setValue(this.educacion.title);
    this.form.get("school")?.setValue(this.educacion.school);
    this.form.get("start")?.setValue(this.educacion.start);
    this.form.get("end")?.setValue(this.educacion.end);

  }

  //Propiedades

  get title() {
    return this.form.get("title");
  }

  get school() {
    return this.form.get("school");
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


