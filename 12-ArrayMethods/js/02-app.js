//findIndex


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

export const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]  


function hacer() {
// Primera forma
meses.forEach( (mes,i) => {
    if (mes === 'Febrero') console.log(`El mes se encuentra en el indice ${i}`);
});

//Forma sugerida
 
const mesEncontrado = meses.findIndex( mes => mes === 'Marzo');

console.log('mesEncontrado', mesEncontrado);
}