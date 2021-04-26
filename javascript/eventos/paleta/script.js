const div= document.querySelector('div');
div.style=`display:flex; justify-content:center; align-items: center; flex-direction:column; font-family: 'Original Surfer', cursive;`;

const box= document.querySelector('.box');
box.style=`border: 2px solid black; width:500px; height:500px; background-color:#AFD5DE; margin-top:50px`;

const buttonOne= document.getElementById('boton-1');
buttonOne.style=`background-color: #617DE8; width:150px; height:40px;`
const buttonTwoo= document.getElementById('boton-2');
buttonTwoo.style=`background-color: #68BDDB; width:150px; height:40px;`
const buttonThree= document.getElementById('boton-3');
buttonThree.style=`background-color: #61E8C2; width:150px; height:40px;`
const buttonFour= document.getElementById('boton-4');
buttonFour.style=`background-color: #F285A6; width:150px; height:40px;`
const buttonFive= document.getElementById('boton-5');
buttonFive.style=`background-color: #E085F2; width:150px; height:40px;`
const buttonSix= document.getElementById('boton-6');
buttonSix.style=`background-color: #BA80E8; width:150px; height:40px;`

const respuesta1=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#617DE8; margin-top:50px`;
}
const respuesta2=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#68BDDB; margin-top:50px`;
}
const respuesta3=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#61E8C2; margin-top:50px`;
}
const respuesta4=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#F285A6 ; margin-top:50px`;
}
const respuesta5=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#E085F2; margin-top:50px`;
}
const respuesta6=()=>{
    box.style=`border: 2px solid black; width:500px; height:500px; background-color:#BA80E8; margin-top:50px`;
}

buttonOne.addEventListener('click', respuesta1)
buttonTwoo.addEventListener('click', respuesta2)
buttonThree.addEventListener('click', respuesta3)
buttonFour.addEventListener('click', respuesta4)
buttonFive.addEventListener('click', respuesta5)
buttonSix.addEventListener('click', respuesta6)