package javaapplicationprueba;

public class Conductor extends Persona {

    private int nroLicencia;

    public Conductor(int nroLicencia, int id, String nombre, String apellido, String dni) {
        super(id, nombre, apellido, dni);
        this.nroLicencia = nroLicencia;
    }

    public int getNroLicencia() {
        return nroLicencia;
    }

    public void setNroLicencia(int nroLicencia) {
        this.nroLicencia = nroLicencia;
    }

    @Override
    public void saludar() {
        System.out.println("Bienvenidos, soy el conductor " + super.getNombre());
    }

    public void conducir() {
        System.out.println("Estoy conduciendo");
    }

}
