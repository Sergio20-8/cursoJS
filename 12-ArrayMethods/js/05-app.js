// Find solo devuelve el primer elemento que cumpla con la condicion 

import { carrito } from './02-app.js'

//foreach

let objeto = '';

carrito.forEach( (producto, i) => {
    if (producto.precio === 100) {
        objeto = producto
    }
});

console.log('resultado', objeto)


//Find

objeto = carrito.find( p => p.precio === 100);

console.log('objeto', objeto);