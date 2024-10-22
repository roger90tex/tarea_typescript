// Funcion para calcular la edad
function calcularEdad(fechaNacimiento: string): number{
    //Convertir la fecha de Nacimiento de string a un objeto de tipo date
    const fechaNac =new Date (fechaNacimiento);

    //obtener la fecha actual

    const fechaActual = new Date();

    // Calcular la diferencia de años entre la fecha actual y la fecha de nacimiento

    let edad = fechaActual.getFullYear()-fechaNac.getFullYear();

    //Ajustar  la edad si la persona aun no ha cumplido años este año
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento =fechaNac.getDate();

    //Si el mes actual es menor al mes de nacimiento, o si es el mismo mes pero el dia actual es menor al dia de nacimiento, restamos 1 año
    if (mesActual< mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)){
        edad--;
    }
    return edad;
}

//Prueba de la funcion

const fechaNacimiento= '1990-10-16';
const edad = calcularEdad(fechaNacimiento);
console.log (`La edad de la persona nacida el ${fechaNacimiento} es: ${edad} años.`)