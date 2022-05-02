package javaapplicationprueba;

public class JavaApplicationPrueba {

    public static void main(String[] args) {
       /* Persona juan = new Persona();
        juan.setNombre("Juan");
        juan.saludar();

        Persona ludmila = new Persona(1, "Ludmina", "Rosales", "34444444");
        ludmila.saludar(); */

        Conductor guillermo = new Conductor(1122, 2, "Guillermo", "Martinez", "22222");
        guillermo.saludar();
        guillermo.conducir();
        
        Persona lucia = new Acompañante(3,"Luca", "Lopez", "454544");
        lucia.saludar();
     
        Auto autoConvertible = new AutoConvertible(); 
        autoConvertible.encender();
        
        Auto autoFamiliar = new AutoFamiliar();
        autoFamiliar.encender();
           
    }
}
