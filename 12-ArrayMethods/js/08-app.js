const carrito = [
    { nombre : "LAPTOP GAMER RX700", precio: 1559.34 },
    { nombre : "LAPTOP LENOVO Z3", precio: 789.94 },
    { nombre : "LAPTOP VAVILON", precio: 1200.76 },
    { nombre : "LAPTOP VICTUS HP", precio: 998.23 }
]
let total = carrito.reduce( ( acumulador, producto ) => acumulador + producto.precio, 0); 
console.log(`Total: $${total}`);