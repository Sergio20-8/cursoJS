const carrito = []

const producto = {nombre: '', precio: 0}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

producto1 = new Producto("Producto xyz", 20);
producto2 = new Producto("Producto uu", 54);
producto3 = new Producto("Producto sd", 86);
producto4 = new Producto("Producto fd", 54);
producto5 = new Producto("Producto gf", 24);

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

const nuevoArreglo = carrito.map( p => { return p });

carrito.forEach( (p,i) => console.log(i, p));

console.table(nuevoArreglo); 