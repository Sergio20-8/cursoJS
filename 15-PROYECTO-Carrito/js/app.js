// Variables

const carritoElement = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
const cursos = document.querySelector("#lista-cursos");

let carrito = [];

cargarEventos();

function cargarEventos() {
    cursos.addEventListener("click", addCarrito);
}

function addCarrito(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        carrito.push(getCurso(curso));
    }
    console.log('carrito', carrito);
}

//Obtener curso
function getCurso(e) {
    const curso = {
      id: parseInt(e.querySelector("a").getAttribute("data-id")),
      titulo: e.querySelector("h4").textContent,
      img: e.querySelector("img").src,
      precio: e.querySelector(".precio span").textContent,
      cantidad: 1
    };
    return curso;
}
