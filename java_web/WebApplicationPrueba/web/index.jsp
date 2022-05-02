<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
            section  {
                margin:15px;
                padding: 10px;
            }
            label {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <section>
            <h1>Alta de Persona</h1>
            <p>Si desea dar de alta un nuevo registro, complete los  datos y luego, presione <b>Enviar</b></p>
            <form action="SvPersona" method="post">
                <p><label>Apellido/s:  </label><input type="text" name="apellido" required></p>
                <p><label>Nombre/s:  </label><input type="text" name="nombre" required></p>
                <p><label>Email: </label><input type="email" name="email" required></p>
                <p><label>DNI: </label><input type="text" name="dni"  required></p>
                <input type="submit"  value="Enviar">
            </form>
        </section>

        <section style="background-color:lightgray">
            <h1>Ver lista de Personas</h1>
            <form action="" method="">
                <input type="submit" value="Mostrar">
            </form>
        </section>

        <section>
            <h1>Baja de Persona</h1>
            <p>Si desea  eliminar un registro  de persona, ingrese el id y luego,  presione <b>Eliminar</b></p>
            <form action="" method="">
                <p><label>Id: </label><input type="number" name="id" required></p>
                <input type="submit" value="Eliminar">
            </form>
        </section>
    </body>
</html>