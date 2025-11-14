//Funciones

sumar();

//Declaracion de la funcion 
// Puede llamarse incluso si fu definido despues 
// porque primero se leen las deficiones de las funciones
function sumar(){
    console.log('Resultado:', 1 + 2)
}
 


// Expresion de funcion
const saludar = function () {
    console.log('Hola mundo')
}

// Este no se puede llamar antes de no haber sido declaradas
saludar();

