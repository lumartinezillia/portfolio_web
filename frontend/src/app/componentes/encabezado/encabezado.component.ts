import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(private miServicio: PersonaService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      url: ['', [Validators.required/*, Validators.pattern('https?://.+')*/]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona = data["Persona"];
    });
  }

  guardarEncabezado() {
    if (this.form.valid) {
      let personaEditar = new Persona(this.form.controls["fullName"].value, this.form.controls["position"].value,
        this.form.controls["ubication"].value, this.form.controls["url"].value);
      this.miServicio.editarDatosPersona(personaEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.persona = personaEditar;
        //deja el form control en blanco luego de guardar)
        this.form.reset();
        //para cerrar el modal usamos las propiedades del DOM
        document.getElementById("cerrarModalEncabezado")?.click();
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

  mostrarDatosEncabezado() {
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("url")?.setValue(this.persona.image);

  }

  //Propiedades

  get fullName() {
    return this.form.get("fullName");
  }

  get position() {
    return this.form.get("position");
  }

  get ubication() {
    return this.form.get("ubication");
  }

  get url() {
    return this.form.get("url");
  }
}
function msg(msg: any, any: any) {
  throw new Error('Function not implemented.');
}

