package javaapplicationprueba;

public abstract class Persona {

    //Definir los atributos
    private int id;
    private String nombre;
    private String apellido;
    private String dni;

    //Crear constructor
    public Persona(int id, String nombre, String apellido, String dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    public Persona() {
    }

    //Definir los métodos getter y setter
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    //Definir los métodos
    public void saludar() {
        System.out.println("Bienvenido, Soy " + nombre);
    }
}
