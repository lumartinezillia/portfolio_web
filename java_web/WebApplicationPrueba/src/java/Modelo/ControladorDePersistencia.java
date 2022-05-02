
package Modelo;

import java.util.List;

public class ControladorDePersistencia {
    
    PersonaJpaController personaJPA = new PersonaJpaController();
    
    public void crearPersona(Persona persona){
        personaJPA.create(persona);
    }
    
    public List<Persona> listarPersonas(){
        return personaJPA.findPersonaEntities();
    }
    
}
