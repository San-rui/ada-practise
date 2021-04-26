const body= document.querySelector('body')
body.style=`display:flex; justify-content:center`

const boxFormat=document.querySelector('.box')
boxFormat.style=`width:550px; font-family: 'Shadows Into Light', cursive; border: 2px solid black; border-radius:20px; box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
padding:20px; display:flex; justify-content:center; align-items: center; flex-direction:column; font-size:20px`

const h1=document.querySelector('h1')

const imagen= document.getElementsByClassName('imagen')

const img = document.querySelector('img')
img.style=`width:500px`

const animal = prompt("Elija un animal: conejo, loro o llama")

const verimagen =(a)=>{
    if (a==="conejo"){
        img.setAttribute('src', 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        h1.innerHTML="Hola soy un conejo"
    }
    else if (a==="loro"){
        img.setAttribute('src', 'https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500') 
        h1.innerHTML="Hola soy un loro"
    }
    else if(a==="llama"){
        img.setAttribute('src', 'https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
        h1.innerHTML="Hola soy una llama"
    }
    }

verimagen(animal);

