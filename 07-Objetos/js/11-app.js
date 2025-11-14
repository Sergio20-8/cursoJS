const producto = {
    nombre: 'Teclado RGB',
    color: 'NEGRO MATE',
    
    mostrarMensaje: function(){
        console.log(`El ${this.nombre} es de color ${this.color}`)
    }
}
 

producto.mostrarMensaje()