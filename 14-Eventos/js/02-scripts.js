const btnBuscar = document.querySelector("#btn-submit");

btnBuscar.addEventListener('click', e => { 
    e.preventDefault();
    console.log(e.bubbles);
    console.log('Le di docble click al elemento.'); 
});
 