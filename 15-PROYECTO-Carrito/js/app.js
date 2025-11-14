const contenedorCurso = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#carrito");
const contenedorDetCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let carrito = [];

inicializarEventsListeners();

function inicializarEventsListeners() {
  contenedorCurso.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = getCurso(e.target.parentElement.parentElement);
    carrito.push(curso);
    updateCarritoHTML(curso);
  }
}

function getCurso(pCurso) {
  const curso = {
    id: parseInt(pCurso.querySelector("a").getAttribute("data-id")),
    titulo: pCurso.querySelector("h4").textContent,
    autor: pCurso.querySelector("p").textContent,
    cantidad: 1,
    precio: pCurso.querySelector(".precio span").textContent,
    imgURL: pCurso.querySelector("img").src,
  };
  return curso;
}

function updateCarritoHTML(curso) {
  const row = document.createElement("tr");
  row.innerHTML = `
            <td> <img src="${curso.imgURL}" class="imagen-curso u-full-width" /> </td>
            <td>  ${curso.titulo} </td>
            <td>  ${curso.precio} </td>
            <td>  ${curso.cantidad} </td>
        `;
  contenedorDetCarrito.appendChild(row);
}
