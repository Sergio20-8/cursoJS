'use strict';

const alumnno = {
    nombre: 'Sergio Hidalgo',
    carnet: 'HB100323',
    carrera: 'Ingenieria en Ciencias de la Computacion'
}

Object.seal(alumnno); //Sella el objeto, no permite agregar o eliminar propiedades, pero si modificar las existentes
alumnno.carrera = 'Ing. en Ciencias de la Computacion';
console.log(alumnno)
console.log("Esta sellado: ", Object.isSealed(alumnno)); //Devuelve true si el objeto esta sellado