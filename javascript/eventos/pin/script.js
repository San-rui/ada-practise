const buttons= document.getElementsByClassName('buttons');
const pin= document.querySelector('#pin1');
const reset= document.querySelector('.reset');
const borrar= document.querySelector('.borrar')

const number=(event)=>{
    const numbers=event.target;
    result = numbers.textContent;
    
    if (pin.innerText.length <6){
        pin.innerText += result;
    }
}

for(let i=0; i <buttons.length; i++){
    buttons[i].addEventListener('click', number);
}

const resetear=()=>{
    window.location.reload();
}
reset.addEventListener('click', resetear);

const lastNum=()=>{
    const array= pin.textContent.split('');
    array.splice(-1, 1);
    const newString= array.join('');
    pin.innerText=newString;
}

borrar.addEventListener('click', lastNum);


