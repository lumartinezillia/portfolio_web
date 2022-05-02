import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/entidades/skill';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;
  
  constructor(private miServicio: SkillsService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      skill: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosSkills().subscribe(data => {
      this.skills = data["skills"];
    })
  }
  guardarSkills() {
    if (this.form.valid) {
      let skillsEditar = new Skill(this.form.controls["skill"].value, this.form.controls["percentage"].value);
      this.miServicio.editarDatosSkills(skillsEditar).subscribe(data => {
        // FALTA modificar el encabezado con los nuevos datos.
        this.skills = skillsEditar;
        this.form.reset();
        document.getElementById("cerrarModalSkills")?.click();
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

  mostrarDatosSkills() {
    this.form.get("skill")?.setValue(this.skills.job);
    this.form.get("percentage")?.setValue(this.skills.company);
  }
}
