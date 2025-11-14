//Spred operatos> ...

const carrito = [];

const producto = {
    nombre: "",
    precio: 0
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto("Monitor de 34\"", 799.99);
const producto2 = new Producto("PC Gamer RTZ", 2399);
const producto3 = new Producto("Teclado retroilumindo", 99.98);

 
let resultadoLista = [...carrito, producto1, producto2] 

let resultadoDos = [...resultadoLista]

console.table( resultadoDos );

