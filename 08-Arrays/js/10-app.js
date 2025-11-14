// DIFERENCIA ENTRE MAP Y FOREACH
// LA PRINCIPAL DIFERENCIA ES QUE 
// CON MAP PODEMOS CREAR UN NUEVO ARREGLO RETORNANDO CADA ELEMENTO DE LA LISTA
// Y CON FOREACH NO

const arreglo = [10,30,60,90];

const nuevoArreglo = arreglo.map((p) => {
    return p;
});


const nuevoArreglo2 = arreglo.forEach((p) => {
    return p;
})

console.table(nuevoArreglo);
console.table(nuevoArreglo2);