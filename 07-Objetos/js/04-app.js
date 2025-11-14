//Destructuring de objetos

const producto = {
    nombre: "Iphone 16 Pro Max",
    precio: 1500,
    disponible: true,
    informacion: {
        peso: '200g',
        medida: '15cm'
    }
}    

const { nombre, precio, disponible, informacion : {peso, medida} } = producto; //Destructuring

console.log(`El producto ${nombre.toUpperCase()} tiene un precio de $${precio} y pesa ${peso} y mide ${medida}`); 