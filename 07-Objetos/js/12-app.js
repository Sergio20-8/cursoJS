
const producto = {
    nombre: "",
    precio: 0,
    disponible: false
}

//Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}


const newProducto = new Producto("IPHONE 16PM", 1500)

console.log(newProducto)