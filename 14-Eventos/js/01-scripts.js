// Ejectutar algo despues de que el HTML ha sido cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log('Se ha cargado el HTML.');
});
 

const header = document.querySelector('header');

// Eventos del mouse

const entrando = () => console.log('Entrando al elemento.');
const saliendo = () => console.log('Saliendo del elemento.');
 

header.addEventListener("mouseenter", entrando);

header.addEventListener("mouseout", saliendo);

header.addEventListener("dblclick", () => console.log('doble click'));

header.addEventListener("mouseup", () => console.log('Se dejo de presionar la tecla del mouse'));

header.addEventListener("mousedown", () => console.log('Se presiono la tecla del mouse.'));
 
header.addEventListener("click", () => console.log("Acaba de presionar el header"));

