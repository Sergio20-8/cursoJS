//Agregar un elemento a un objeto


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
} 
producto.imagen = 'imagen.jpg'; //Agregar una nueva propiedad al objeto
console.log(producto);


//Eliminar un elemento de un objeto

delete producto.precio;

console.log(producto);