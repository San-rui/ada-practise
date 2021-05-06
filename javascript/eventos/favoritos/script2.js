const images = document.getElementsByClassName("img-fav")
const listFav = document.getElementById("list-fav")

const removeFromFav = (evento) => {
    listFav.removeChild(evento.target);
}

const addToFav = (evento) => {
    let elementoClonado = evento.target.cloneNode(true);
    listFav.appendChild(elementoClonado);
    elementoClonado.addEventListener('click', removeFromFav)
}

for(let i=0; i <images.length; i++){
    images[i].addEventListener("click", addToFav);  
}