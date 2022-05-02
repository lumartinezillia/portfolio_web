package javaapplicationprueba;

public class AutoConvertible implements Auto {

    @Override
    public void encender() {
        System.out.println("El auto convertible esta encendido");
    }

    @Override
    public void apagar() {
        System.out.println("El auto convertible esta apagado");
    }

    public void acelerar() {
        System.out.println("El auto convertible esta acelerando");
    }

}
