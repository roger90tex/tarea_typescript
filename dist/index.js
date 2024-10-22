"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad}.`;
    }
}
const persona1 = new Persona('Rogelio', 34);
console.log(persona1.saludar());
