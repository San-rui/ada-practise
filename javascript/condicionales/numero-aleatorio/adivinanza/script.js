const riddle1 = document.querySelector('#riddle1');
const riddle2 = document.querySelector('#riddle2');
const riddle3 = document.querySelector('#riddle3');
const riddle4 = document.querySelector('#riddle4');
const riddle5 = document.querySelector('#riddle5');
const play =document.querySelector('#play')

const rangeNum= Math.ceil(Math.random() * 5)
    const randomNum=Math.round(rangeNum);

const playRiddle=()=>{
    
    console.log(randomNum)
    if(randomNum=="1"){
        riddle1.style=`display:flex`;
        riddle2.style=`display:none`;
        riddle3.style=`display:none`;
        riddle4.style=`display:none`;
        riddle5.style=`display:none`;
        
    }
    else if(randomNum=="2"){
        riddle2.style=`display:flex`;
        riddle1.style=`display:none`;
        riddle3.style=`display:none`;
        riddle4.style=`display:none`;
        riddle5.style=`display:none`;
    }
    else if(randomNum=="3"){
        riddle3.style=`display:flex`;
        riddle1.style=`display:none`;
        riddle2.style=`display:none`;
        riddle4.style=`display:none`;
        riddle5.style=`display:none`;
    }
    else if(randomNum=="4"){
        riddle4.style=`display:flex`;
        riddle1.style=`display:none`;
        riddle2.style=`display:none`;
        riddle3.style=`display:none`;
        riddle5.style=`display:none`;
    }
    else if(randomNum=="5"){
        riddle5.style=`display:flex`;
        riddle1.style=`display:none`;
        riddle2.style=`display:none`;
        riddle3.style=`display:none`;
        riddle4.style=`display:none`;
    }
}

play.addEventListener('click', playRiddle);

const answerRiddle1= document.querySelector('#answerRiddle1');
const text = document.querySelector('#text')

const respuesta =()=>{
    if(answerRiddle1.value=="elefante"){
        text.innerHTML="Correcto!!!"
    }
    else{
        text.innerHTML="Vuelve a intentarlo"
    }
}

answerRiddle1.addEventListener('change' , respuesta);

const butonReset = document.querySelector('#reset');

function reloadPage(){
    window.location.reload();
}

butonReset.addEventListener('click', reloadPage)