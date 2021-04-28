const body = document.querySelector('body');
body.style=`display:flex; justify-content:center; align-items: center; flex-direction:column;`

const barra1 = document.querySelector('#barra-total')
barra1.style=`width:1000px; height:50px; background-color:#9CD9D5; margin:30px; overflow: hidden;`

const barra2 = document.querySelector('#barra-interior')

const resultado=document.querySelector('span')

const buttonOne= document.getElementById('boton-1');
buttonOne.style=`background-color: #617DE8; width:150px; height:40px; margin:20px; font-size:30px;`
const buttonTwoo= document.getElementById('boton-2');
buttonTwoo.style=`background-color: #68BDDB; width:150px; height:40px; font-size:30px;`

const respuesta1=()=>{
    resultado.innerText=Number(resultado.innerText)+10;
    let percent =(resultado.innerText*1000)/100;
    console.log(percent);
    barra2.style= `width:${percent}px; height:50px; background-color:#D678A2`;  
}
const respuesta2=()=>{
    resultado.innerText=Number(resultado.innerText)-10;
    let percent =(resultado.innerText*1000)/100;
    barra2.style= `width:${percent}px; height:50px; background-color:#D678A2`; 
}

buttonOne.addEventListener('click', respuesta1)
buttonTwoo.addEventListener('click', respuesta2)

