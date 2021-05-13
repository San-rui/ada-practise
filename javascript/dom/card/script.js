const body = document.querySelector('body')
body.style=`display:flex; justify-content:center;margin-top:50px;`

const format = document.querySelector('.style-card')
format.style=`width:60%; border:2px solid black;border-radius:20px; height:500px;box-shadow: 10px -7px 9px 0px rgba(120,110,110,0.75);font-family: 'Lato', sans-serif; padding:30px; `

const formatsection = document.querySelector('section')
formatsection.style=`display:flex; flex-direction:column;`

const h1 = prompt("Ingrese el titulo")
const title= document.querySelector('h1')
title.innerHTML= h1
title.style=`font-size:40px; color:#7E95DE`

const imagenformt=document.querySelector('img')
imagenformt.style=`width:60%;`

const imagen = prompt("Ingrese la url de una imagen")
document.querySelector("#newimagen").src = imagen; 


const article = prompt("Ingrese la url de un articulo")
document.querySelector("#newlink").href = article; 