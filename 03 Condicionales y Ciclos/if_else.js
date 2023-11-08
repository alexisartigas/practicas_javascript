/** Verifica el Nombre */
const nombre = 'Alexis'
/** Metodos Condicionales IF y ELSE */
if (!nombre == 'Alexis') {
    console.log('El Nombre es diferente a Alexis');
} else {
    console.log('El Nombre es igual a Alexis');
}


/** Verifica la Edad con varias condicionales*/
const edad = 18;
/** Primero verificamos si es MAYOR a 18  */
if (edad > 18) {
    console.log('la Edad es MAYOR a 18');
}else if(edad == 18) { /** Después verificamos si es IGUAL a 18  */
    console.log('la Edad es IGUAL a 18');
}else{ /** Y por defecto queda todo aqyel MENOR a 18  */
    console.log('la Edad es MENOR a 18'); 
}