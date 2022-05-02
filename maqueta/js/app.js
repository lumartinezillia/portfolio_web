"use strict";
let saludo = "Bienvenidos a Argentina Programa";
//saludo=45;
console.log(saludo);
/*let persona={fullName:"Lucía Martinez Illiazzz",
position:"Desarrolladora Web Full Stacky", ubication:"Buenos Aires, Argentina"};*/
class Persona {
    constructor(fullName, position, ubication) {
        this.fullName = fullName;
        this.position = position;
        this.ubication = ubication;
    }
    get FullName() {
        return this.fullName;
    }
    set FullName(fullName) {
        this.fullName = fullName;
    }
    toString() {
        console.log("implementación de comportamiento para la clase");
    }
}
let personaNueva = new Persona("Lucía Martinez Illia", "Full Stack Developer Jr", "Córdoba, Argentina");
// personaNueva.FullName="Honolulu Zenitram";
personaNueva.toString();
document.getElementById("fullName").innerHTML = personaNueva.FullName;
document.getElementById("position").innerHTML = personaNueva.position;
document.getElementById("ubication").innerHTML = personaNueva.ubication;
function onEditar() {
    alert(document.getElementById("acercaDe").innerHTML);
    console.log(saludo);
}
