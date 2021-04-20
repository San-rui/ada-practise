function  obtenerPrimeraOracion(archivo) {
    const extension=archivo.split(".");
    return extension[0]  
}
console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'))
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'))