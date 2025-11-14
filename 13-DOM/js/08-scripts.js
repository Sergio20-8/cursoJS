const botonFooter = document.querySelector("#btnFooter");
const footer = document.querySelector("footer");

const ACTIVO = "activo";

botonFooter.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
  const clasesFooter = footer.classList;
  const clasesBtn = botonFooter.classList;

  clasesBtn.toggle(ACTIVO); 
  clasesFooter.toggle(ACTIVO);

  // Con el metodo toogle, si encuentra 
  // que la clase ya esta incluida entonces la quita o viceversa
}