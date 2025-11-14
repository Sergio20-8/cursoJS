const inputBusqueda = document.querySelector(".busqueda");

// inputBusqueda.addEventListener('keydown', () => {
//   // Este evento se dispara cada vez que
//   // se mantiene presionado una tecla
//   console.log("Estoy presionando una tecla.");
// });

// inputBusqueda.addEventListener('keyup', () => {
//   // Este evento se dispara cada vez que
//   // se suelta una tecla
//   console.log("Acabo de soltar una tecla.");
// });

// inputBusqueda.addEventListener('blur', () => {
//   // Este evento se dispara cada vez que
//   // se sale del input
//   console.log("Acabo de salirme del input.");
// });

// inputBusqueda.addEventListener('copy', () => {
//     // Este evento se dispara cada vez que 
//     // se copia dentro del input
//     console.log('Acabo de copiar algo en el input.')
// });

// inputBusqueda.addEventListener('paste', () => {
//   // Este evento se dispara cada vez que
//   // se pega dentro del input
//   console.log("Acabo de pegar algo en el input.");
// });

// inputBusqueda.addEventListener('cut', () => {
//   // Este evento se dispara cada vez que
//   // se corta dentro del input
//   console.log("Acabo de cortar algo en el input.");
// });

// inputBusqueda.addEventListener('input', () => {
//   // Este evento se dispara cada vez que
//   // se realice cualquier accion anterior a excepcion del blur
//   console.log("Escribiendo...");
// });


inputBusqueda.addEventListener('input', (event) => {
    console.log(event.target.value);
});

inputBusqueda.addEventListener("blur", (event) => {
    const codigo = event.target.value.replace(/\s/g, "")
    if (codigo !== "") {
        console.log(`Validando ${codigo}...`);
    } else {
        console.log('Verique que el codigo no vaya vacio.')
    }
});