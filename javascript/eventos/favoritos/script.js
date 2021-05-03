const img = document.getElementById("image-fav")
const listFav= document.getElementById("list-fav")
const imgClone = img.cloneNode(true);

const addToFav =()=>{
    listFav.appendChild(imgClone);
}

img.addEventListener("click", addToFav);



