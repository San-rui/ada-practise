const body = document.querySelector('body');
body.style=`display:flex; justify-content:center; align-items: center; flex-direction:column; font-family: 'Titillium Web', sans-serif;`;

const span= document.querySelector('span')

const formatButton = document.querySelector('.stilyButton');
formatButton.style=`border-radius:1000px; outline:none; width:50px; height:50px; display:flex; justify-content:center; align-items: center; flex-direction:column;`

const boton= document.querySelector('#boton');
const img = document.querySelector('img')

const respuesta=()=>{
    document.body.classList.toggle('darkmode');
    const image=img.getAttribute('src');
    if (image==='./sun.svg'){
        img.setAttribute('src','./moon.svg')
    }
    else{
        img.setAttribute('src','./sun.svg')
    }
    
}

boton.addEventListener('click', respuesta);