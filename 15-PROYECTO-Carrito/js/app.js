
//const carrito = [];
let listaCurso = [];

const curso = {
    titulo : "",
    autor : "",
    cantidad : 1,
    precio : 0,
    imgURL: ""
};

function Curso(titulo, autor, cantidad, precio, imgURL){
    this.titulo = titulo;
    this.autor = autor;
    this.cantidad = cantidad;
    this.precio = precio;
    this.imgURL = imgURL;
};
 

const listaCursosHTML = document.querySelector("#lista-cursos");
 

inicializarEvenetsListeners();


function inicializarEvenetsListeners() {

    listaCursosHTML.addEventListener('click', addCarrito);

}
 
function addCarrito(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        console.log(e.target.parentElement.parentElement);
    }
}
 


