// Evento de formularios
 
const formulario = document.querySelector('#formulario');  


// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Enviando Data...");
// });


formulario.addEventListener('submit', enviarFormulario);


function enviarFormulario(e){
    e.preventDefault();
    console.log('Enviando data...');
}
 