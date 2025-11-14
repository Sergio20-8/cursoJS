import { carrito } from "./02-app.js";

let index = carrito.findIndex( producto => producto.nombre === 'Tablet') 
console.log('index', index)

