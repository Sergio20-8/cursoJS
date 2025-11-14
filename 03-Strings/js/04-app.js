//Metodos para Strings
//Los metodos son funciones que ya vienen integradas en los objetos de JavaScript
//Los strings en JavaScript son objetos

const producto = 'Monitor 20 pulgadas';
/*
// Length 
// es una propiedad que nos indica la cantidad de caracteres que tiene un string
// Los espacios también cuentan como caracteres
console.log(producto.length);

// IndexOf 
// nos permite saber en que posicion se encuentra un caracter o cadena de caracteres dentro de un string

console.log(producto.indexOf('20')) 
console.log(producto.indexOf('tablet')); //Devuelve -1 si no encuentra la palabra


// Includes 
// nos permite saber si un caracter o cadena de caracteres existe dentro de un string
 console.log(producto.includes("Monitor")) //Devuelve true si encuentra la palabra
 console.log(producto.includes("")) //Devuelve false si no encuentra la palabra
 

 
// Slice 
// nos permite cortar un string y devolver una parte del mismo
  
console.log(producto.slice(0,7));  //Corta el string desde la posicion 0 hasta la 10
console.log(producto.slice(11,16) + producto.slice(18)); //Corta el string desde la posicion 8 hasta el final
 
// Replace 
// nos permite reemplazar un caracter o cadena de caracteres por otro
console.log(producto.replace('pulgadas', '"')); //Reemplaza la palabra por el caracter indicado
*/


// Trim 
// nos permite eliminar los espacios en blanco al inicio y al final de un string
const producto2 = '     t   Monitor 20 pulgadas   p';

console.log(producto2.replace(/\s+/g, '').trim());

