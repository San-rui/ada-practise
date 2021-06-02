const button = document.querySelector('#button');
const text=document.querySelector('#text');
const buttonReset = document.querySelector('#reset');

const matrix= ([
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
    ]);

const getMaxNumber=()=>{
    const max = Math.max(...[].concat(...matrix));
    text.innerHTML=max;
    console.log(max);
    buttonReset.style=`display:block;`;
}

button.addEventListener('click', getMaxNumber);

function reloadPage(){
    window.location.reload();
}

buttonReset.addEventListener('click', reloadPage);