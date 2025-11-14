//Reduce

import { carrito } from "./02-app.js"

let total = 0;
carrito.forEach(c => total += c.precio);

console.log('total', total);


// Utilizando Reduce

let resultado = carrito.reduce((total, p) => total + p.precio, 0);

console.log('resultado', resultado)