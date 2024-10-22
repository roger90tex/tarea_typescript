class Persona{
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number){
        this.nombre =nombre;
        this.edad =edad;
    }

    public saludar(): string{
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad}.`;
    }
}

const persona1 = new Persona('Rogelio', 34);
console.log(persona1.saludar());