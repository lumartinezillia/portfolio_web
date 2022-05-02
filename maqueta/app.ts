let saludo: string = "Bienvenidos a Argentina Programa";
//saludo=45;
console.log(saludo);

/*let persona={fullName:"Lucía Martinez Illiazzz", 
position:"Desarrolladora Web Full Stacky", ubication:"Buenos Aires, Argentina"};*/

class Persona {
    protected fullName: string;
    readonly position: string;
    readonly ubication: string;

    constructor(fullName: string, position: string, ubication: string) {
        this.fullName = fullName;
        this.position = position;
        this.ubication = ubication;
    }
   
    get FullName():string{
        return this.fullName;
    }

    set FullName(fullName:string){
        this.fullName = fullName;
    }

    toString(){
        console.log("implementación de comportamiento para la clase");
    }
}

let personaNueva:Persona = new Persona("Lucía Martinez Illia", "Full Stack Developer Jr", "Córdoba, Argentina");
// personaNueva.FullName="Honolulu Zenitram";
personaNueva.toString();
(document.getElementById("fullName") as HTMLHeadElement).innerHTML = personaNueva.FullName;
(document.getElementById("position") as HTMLParagraphElement).innerHTML = personaNueva.position;
(document.getElementById("ubication") as HTMLParagraphElement).innerHTML = personaNueva.ubication;


function onEditar() {
    alert((document.getElementById("acercaDe") as HTMLParagraphElement).innerHTML);
    console.log(saludo);
}