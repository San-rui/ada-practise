function obtenerExtension(archivo) {
    const extension=archivo.split(".");
    return extension[1]  
}
console.log(obtenerExtension('imagen.png'))
console.log(obtenerExtension('index.html'))
console.log(obtenerExtension('notas.txt'))