const listaCanciones=document.getElementsByClassName('canciones');

for(let i=0; i<listaCanciones.length; i++){
    const cancion = prompt(`ingrese la cancion ${i+1}`)
    listaCanciones[i].innerHTML=cancion
}