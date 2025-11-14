// modificar texto en html

const textoHTML = document.querySelector('.contenido-hero h1');
 
console.log(textoHTML.innerText);
console.log(textoHTML.innerHTML);
console.log(textoHTML.textContent); // visibility: hidden; si esta asi entonces no se mostrara

textoHTML.style.visibility = 'visible';
textoHTML.textContent = 'Hello World'; 

const imagen = document.querySelectorAll('.card img');

imagen.forEach( a => a.src = 'img/hacer4.jpg');