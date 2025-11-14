//Filter


import { carrito } from "./02-app.js"

let resultado;

// Filter te crea un nuevo arreglo dependiendo de la condicion
resultado = carrito.filter(p => p.precio === 100);
resultado = carrito.filter(p => p.nombre !== 'Teclado');
console.log('resultado', resultado)