// Retorna maximo un elemento
// permite seleccionar clases

// Seleccionando por clase
let resultado = document.querySelector('.card');
console.log('resultado', resultado);

// Seleccionando un hijo de una clase 
let info = document.querySelector('.premium .info');
console.log('info', info);

// Seleccionando especificamente una clase repedito dentro de un elemento con clase
let card = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log('card', card);

// Seleccionando un ID
const formulario = document.querySelector('#formulario');
console.log('formulario', formulario);