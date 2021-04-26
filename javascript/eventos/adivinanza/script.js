const body= document.querySelector('body');
body.style=`display:flex; justify-content:center; font-family: 'Original Surfer', cursive;`;

const div= document.querySelector('div');
div.style=`display:flex; justify-content:center; align-items: center; flex-direction:column; border: 2px solid black; border-radius:20px; padding:20px; margin-top:100px; background-color:#AFD5DE;`;

const button = document.getElementsByClassName('buttonFormat')
const addingStyle=()=>{
    for(let i=0; i<button.length; i++){
        button[i].style.width="150px";
        button[i].style.fontSize="20px";
        button[i].style.margin="10px";
        button[i].style.height="40px";
        button[i].style.borderRadius="10px";
        button[i].style.backgroundColor="#3EACBD";
    }
}

addingStyle() // agregue la funcion con el for para reutilizar el for soin tener que repetir codigo :) 

const title= document.querySelector('h2')
const buttonOne= document.getElementById('boton-1');
const buttonTwoo= document.getElementById('boton-2');
const buttonThree= document.getElementById('boton-3');
const reset= document.querySelector('#reset');

const respuesta1=()=>{
    //event.target.parentElement.style=`background-color:red` esto es para cambiar el contenedor padre
    //buttonOne.classList.add('red') esto sirve sitengo los estilos en css
    buttonOne.style=`background-color:#FA1200`;
    buttonTwoo.style=`background-color:#5EE34B`;
    title.innerHTML="¡Le erraste!";
    console.log('¡Le erraste!');
}
const respuesta2=()=>{
    buttonTwoo.style=`background-color:#5EE34B`;
    title.innerHTML="¡Correcto!";
}
const respuesta3=()=>{
    buttonTwoo.style=`background-color:#5EE34B`;
    buttonThree.style=`background-color:#FA1200`;
    title.innerHTML="¡Le erraste!";
}

buttonOne.addEventListener('click', respuesta1);
buttonTwoo.addEventListener('click', respuesta2);
buttonThree.addEventListener('click', respuesta3);
reset.addEventListener('click', addingStyle) //esto es para resetar la pagina







