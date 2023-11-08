/* Función Imprimir variables */
function imprimir_nombre_completo(nombre, apellido) {
    /** Las siguientes variable si cambian su valor debido a que se setean nuevamente */
    //nombre = 'Nombre Cambiado'
    //apellido = 'Apellido Nuevo'

    resultado = console.log('Mi nombres es '+ nombre + ' y mi apellido es ' + apellido);
    return resultado;
}

let nombre = 'Alexis';
var apellido = 'Artigas';

imprimir_nombre_completo(nombre, apellido);

/* Función Imprimir Constante*/
/**  */
function imprimit_constantes(parametro) {
    //console.clear();
    /* declaramos nuevamente la constante texto para ver resultados que ya fue */
    texto = 'cambiar texto';
    resultado = console.log(parametro);
    return resultado;
}

const constante = 'Este texto no varía';

/** Como resultado imprime la constante seteada fuera de la function */
imprimit_constantes(constante);
