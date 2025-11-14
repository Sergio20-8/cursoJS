//every

//Devuelve un booleano dependiendo de si todos cumplen con la condicion

import { carrito } from "./02-app.js";


const resultado = carrito.every( producto => producto.precio < 800);

console.log('resultado', resultado);