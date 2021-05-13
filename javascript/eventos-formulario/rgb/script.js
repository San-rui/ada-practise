const red=document.querySelector('#red');
const green=document.querySelector('#green');
const blue=document.querySelector('#blue');
const body=document.querySelector('body');

const backgroundBody=()=>{ 
    const color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    body.style=`background-color:${color}`;
}

red.addEventListener('keyup', backgroundBody);
green.addEventListener('keyup', backgroundBody);
blue.addEventListener('keyup', backgroundBody);


