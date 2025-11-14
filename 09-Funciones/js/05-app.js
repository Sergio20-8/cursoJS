const reproductor = {
    reproducir : () => {
        console.log('Reproduciendo musica...')
    },
    pausar : () => {
        console.log('Cancion pausada.')
    }
}

reproductor.reproducir()
reproductor.pausar()

reproductor.borrar = () => console.log('Borrando cancion.')


reproductor.borrar()