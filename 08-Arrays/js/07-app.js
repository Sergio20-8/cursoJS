//Eliminar el ultimo objeto en una lista> ...

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

 // Esto es equivalente a utilizar el metodo concat de la lista
let resultadoLista = [...carrito, producto1, producto2, producto3] 

let resultadoDos = [...resultadoLista]

//Elimina el ultimo
//resultadoDos.pop();

//Elimina el primer elemento
//resultadoDos.shift();

//Eliminar un elemento que no sea el primero o el ultimo de la lista
resultadoDos.splice(1,1) //Eliminar PC Gamer



console.table( resultadoDos );

