const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
 
console.log( meses.includes('Febrero') ? 'Si existe':'No existe'); 

// Some se utiliza cuando es un arreglo de objetos
// Some te retorna un falso o verdadero 
 const existeProducto = carrito.some( producto => producto.nombre === 'Televisión');

console.log(  existeProducto ? 'Si existe':'No existe', 'el producto.'); 