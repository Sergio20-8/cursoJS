//Destructuring de Arrays

const numeros = [10,20,30,40,50];

let [primero] = numeros;

console.log('primero', primero);

//El ...tres significa que sera una copia de los valores que se encuentran desde la segunda posicion en adelante. Por lo tanto, se convertiria en una lista
let [uno, dos, ...tres] = numeros;

console.log('tres', tres)
