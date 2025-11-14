//Var se utilizaba para declarar variables, pero ya no se usa por buenas prácticas
//Ya que tiene varios problemas, uno de ellos es el scope
//que es el scope global y el scope local
//Ejemplo de scope global
var producto = 'Audifonos Gamer'; //Iniciar variable y asignarle un valor
console.log(producto);  //Muestra el valor de la variable

function mostrarProducto() {
    console.log('Desde una función: ' + producto); //Accede a la variable global
}
mostrarProducto();

//Ejemplo de scope local    
function mostrarProducto2() {
    var producto = 'Computadora'; //Iniciar variable y asignarle un valor
    console.log('Desde una función: ' + producto); //Accede a la variable local
}   
mostrarProducto2();
console.log(producto);  //Muestra el valor de la variable global
//console.log('Desde una función: ' + producto); //No puede acceder a la variable local



// ===========================================================================
// Let permite incializar variables que pueden cambiar su valor a lo largo 
// del tiempo y no tiene problemas de scope

let producto = 'Audifonos Gamer'; //Iniciar variable y asignarle un valor
producto = true; //Reasignando el valor de la variable
producto = 20;  //Reasignando el valor de la variable

let disponible; //Iniciando una variable sin valor
disponible = true;



// ===========================================================================
//Const es una variable que no puede cambiar su valor a lo largo del tiempo
//Siempre debe iniciar con un valor
const producto = 'Audifonos Gamer'; //Iniciar variable y asignarle un valor
//producto = true; //No se puede reasignar el valor de la variable
//producto = 20;  //No se puede reasignar el valor de la variable
