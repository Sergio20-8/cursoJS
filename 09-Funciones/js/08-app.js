//Para un arrow funcion, si solo es una instruccion no es necesario las llaves. Tambien si solo se pasa un parametro entonces no es necesario tenerlo entre parentesis.

const reproductor = {
    cancion : '',
    reproducir : id => console.log(`Reproduciendo musica ${id}`),
    pausar : () => console.log('Cancion pausada.'),
    getCancion : () =>  {return this.cancion},
    setCancion : cancion => this.cancion = cancion
}

// reproductor.reproducir(5)
// reproductor.pausar()
// reproductor.borrar = () => console.log('Borrando cancion.')
// reproductor.borrar()

reproductor.setCancion("Subeme la radio \nEnrique Iglesias");
let result = new String(reproductor.getCancion())


//console.log(result.toUpperCase());

//OTRA FORMA DE DEFINIR LOS GETTERS AND SETTER como una propiedad del objeto

const reproducto2 = {
    cancion: '',

    set setCancion(cancion){
        this.cancion = cancion;
    },

    get getCancion(){
        return this.cancion;
    }
}


reproducto2.setCancion = "Dorime";

console.log('reproducto2.getCancion:', reproducto2.getCancion);