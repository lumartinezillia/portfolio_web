
package com.myApiLM.SpringBoot.Controller;

import com.myApiLM.SpringBoot.Model.Educacion;
import com.myApiLM.SpringBoot.Model.Persona;
import com.myApiLM.SpringBoot.Service.EducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class EducacionController {
   
@Autowired 
EducacionService eduService;

@GetMapping("/educacion/{idPersona}")
public List<Educacion> obtenerRegistrosEducacion(@PathVariable Long idPersona){
     return eduService.obtenerRegistrosEducacion(idPersona);
 } 

@DeleteMapping("/educacion/{id}")
public void eliminarEducacion(@PathVariable Long id){
    eduService.eliminarEducacion(id);
}
@PutMapping("/educacion")
    public void modificarEducacion(@RequestBody Educacion educacion) {
        eduService.modificarEducacion(educacion);
    }
    
}
