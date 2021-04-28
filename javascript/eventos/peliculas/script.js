const body = document.querySelector('#body');
body.style=`display:flex; justify-content:center; align-items: center; flex-direction:column;`

const buttonsContainer = document.querySelector('#buttonsContainer');
buttonsContainer.style=`margin:30px; display:flex; justify-content:center; align-items: center;`

const button = document.getElementsByClassName('myButton')
for(let i=0; i<button.length; i++){
    button[i].style.width="150px";
    button[i].style.fontSize="20px";
    button[i].style.margin="10px";
    button[i].style.height="40px";
    button[i].style.borderRadius="10px";
    button[i].style.border="none";
    button[i].style.backgroundColor="#66D4C2";

}
//<-------------Format----------------->

const allMovies= document.querySelector('#allMovies');
const horrorSection= document.querySelector('#horrorSection');
const dramaSection=document.querySelector('#dramaSection');
const actionSection=document.querySelector('#actionSection');

const buttonH= document.querySelector('#horrorMovies');
const buttonD= document.querySelector('#dramaMovies');
const buttonA= document.querySelector('#actionMovies');
const buttonAll= document.querySelector('#allMovies');

const horror=()=>{
    dramaSection.style=`display:none;`;
    actionSection.style=`display:none;`;
    horrorSection.style=`display:in-line;`;
}
buttonH.addEventListener('click', horror);

const drama=()=>{
    horrorSection.style=`display:none;`;
    actionSection.style=`display:none;`;
    dramaSection.style=`display:in-line;`;
}
buttonD.addEventListener('click', drama);

const action=()=>{
    horrorSection.style=`display:none;`;
    actionSection.style=`display:in-line;`;
    dramaSection.style=`display:none;`;
}
buttonA.addEventListener('click', action);

const all=()=>{
    horrorSection.style=`display:in-line;`;
    actionSection.style=`display:in-line;`;
    dramaSection.style=`display:in-line;`;
}
buttonAll.addEventListener('click', all);