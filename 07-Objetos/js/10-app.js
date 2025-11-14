//Combinar objetos

const producto = {
    nombre: 'Teclado RGB',
    color: 'NEGRO MATE',
    precio: 49.98
}

const medidas = {
    ancho:  '56cm',
    largo: '27cm'
}


//COMBINAR LOS OBJETOS
console.log(Object.assign(producto, medidas))

//COPIAR LOS OBJETOS
//Spred operator
const combinacion = {...producto, ...medidas}
console.log("Estas es el resultado de combinar ambos objetos: ", combinacion)