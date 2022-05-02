package Controlador;

import Modelo.ControladorDePersistencia;
import Modelo.Persona;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "SvPersona", urlPatterns = {"/SvPersona"})
public class SvPersona extends HttpServlet {

    ControladorDePersistencia controladora = new ControladorDePersistencia();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);

        String apellido = request.getParameter("apellido");
        String nombre = request.getParameter("nombre");
        String email = request.getParameter("email");
        String dni = request.getParameter("dni");

        // System.out.println("Nombre: " + nombre + " " + apellido);
        Persona persona = new Persona(0, apellido, nombre, email, dni);
        controladora.crearPersona(persona);

        response.sendRedirect("index.jsp");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
