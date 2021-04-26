const body = document.querySelector('body')
body.style=`display:flex; justify-content:center; margin-top:50px;`

const formatBox= document.querySelector('.box')
formatBox.style=`width:1200px; border: 1px solid black; border-radius:10px; box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.75); padding:20px; display:flex; justify-content:center; align-items: center; flex-direction:column;`

const questionFood= prompt("Que desea ver? comida, postre o bebida?")

const title = document.querySelector('h1')
title.style=`font-family: 'Kalam', cursive; font-size:45px`

const imagen1= document.querySelector('#imagen1')
const imagen2= document.querySelector('#imagen2')
const imagen3= document.querySelector('#imagen3')
const imagen4= document.querySelector('#imagen4')

const formarImagen = document.getElementsByClassName('imagenFormat')

for(let i=0; i<formarImagen.length; i++){
    formarImagen[i].style.width="250px";
    formarImagen[i].style.height="400px";
    formarImagen[i].style.margin="20px";
}

const imagesSelection =(a)=>{
    if(a=="comida"){
        imagen1.setAttribute('src', 'https://images.pexels.com/photos/3276236/pexels-photo-3276236.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen2.setAttribute('src', 'https://images.pexels.com/photos/3743537/pexels-photo-3743537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen3.setAttribute('src', 'https://images.pexels.com/photos/3893708/pexels-photo-3893708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen4.setAttribute('src', 'https://images.pexels.com/photos/3490368/pexels-photo-3490368.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        title.innerHTML="Estas son tus opciones de comida"
    }
    else if(a=="postre"){
        imagen1.setAttribute('src', 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen2.setAttribute('src', 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen3.setAttribute('src', 'https://images.pexels.com/photos/6607317/pexels-photo-6607317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen4.setAttribute('src', 'https://images.pexels.com/photos/6607420/pexels-photo-6607420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        title.innerHTML="Estas son tus opciones de postre"
    }
    else if(a=="bebida"){
        imagen1.setAttribute('src', 'https://images.pexels.com/photos/989711/pexels-photo-989711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen2.setAttribute('src', 'https://images.pexels.com/photos/7235673/pexels-photo-7235673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen3.setAttribute('src', 'https://images.pexels.com/photos/1289247/pexels-photo-1289247.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        imagen4.setAttribute('src', 'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        title.innerHTML="Estas son tus opciones de bebida"
    }
}
imagesSelection(questionFood);



