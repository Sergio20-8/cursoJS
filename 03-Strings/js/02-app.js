export const msg = "Sergio, recuerda trabajar en tus sueños.";
export const msg2 = "Cada vez estas más cerca de lograrlos.";

//Length es una propiedad que nos indica la cantidad de caracteres que tiene un string
//Los espacios también cuentan como caracteres
//alert(msg.length);

//Al importar elementos de este archivo en otro archivo, si hay instrucciones que no estan encapsuladas se ejecutan inmediatamente. Es por esa razon que encapsulamos las instrucciones en funciones para que solo se ejecuten cuando las llamemos.Como se muestra a continuación:

export function showLength() {
    alert(msg.length);
}

//Si no encapsulamos la instrucción en una función, el alert se ejecutará inmediatamente al importar este archivo en otro archivo, lo cual no es deseado en la mayoría de los casos.