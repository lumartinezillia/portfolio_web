package javaapplicationprueba;

public class Acompañante extends Persona {

    public Acompañante(int id, String nombre, String apellido, String dni) {
        super(id, nombre, apellido, dni);
    }

    @Override
    public void saludar() {
        System.out.println("Bienvenidos, soy el acompañante " + super.getNombre());
    }
}
