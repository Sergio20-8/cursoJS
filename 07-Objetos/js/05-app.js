//Object methods

'use strict';

const alumnno = {
    nombre: 'Sergio Hidalgo',
    carnet: 'HB100323',
    carrera: 'Ingenieria en Ciencias de la Computacion'
}


Object.freeze(alumnno); //Congela el objeto, no permite agregar, eliminar o modificar propiedades

console.log(alumnno)

console.log("Esta cogelado:", Object.isFrozen(alumnno)); //Devuelve true si el objeto esta congelado 