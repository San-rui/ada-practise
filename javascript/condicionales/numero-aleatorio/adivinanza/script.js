const riddle1 = document.querySelector('#riddle1');
const riddle2 = document.querySelector('#riddle2');
const riddle3 = document.querySelector('#riddle3');
const riddle4 = document.querySelector('#riddle4');
const riddle5 = document.querySelector('#riddle5');
const play =document.querySelector('#play');
let answerX=""

const rangeNum= Math.ceil(Math.random() * 5)
const randomNum=Math.round(rangeNum);

const playRiddle=()=>{
    
    console.log(randomNum)
    if(randomNum=="1"){
        answerX="elefante";
        riddle1.style=`display:flex`;
    }
    else if(randomNum=="2"){
        answerX="pato";
        riddle2.style=`display:flex`;
    }
    else if(randomNum=="3"){
        answerX="murcielago";
        riddle3.style=`display:flex`;
    }
    else if(randomNum=="4"){
        answerX="pingüino";
        riddle4.style=`display:flex`;
    }
    else if(randomNum=="5"){
        answerX="rana";
        riddle5.style=`display:flex`;
    }
}

play.addEventListener('click', playRiddle);

const answerRiddle1= document.querySelector('#answerRiddle1');
const answerRiddle2= document.querySelector('#answerRiddle2');
const answerRiddle3= document.querySelector('#answerRiddle3');
const answerRiddle4= document.querySelector('#answerRiddle4');
const answerRiddle5= document.querySelector('#answerRiddle5');
const text = document.querySelector('#text')

const respuesta =()=>{
    if(answerRiddle1.value==answerX && randomNum=="1"){
        text.innerHTML="Correcto!!!";
        swal({
            icon: "success",
        });
    }
    else if(answerRiddle2.value==answerX && randomNum=="2"){
        text.innerHTML="Correcto!!!";
        swal({
            text: "Bien hecho!!!",
            icon: "success",
        });
    }
    else if(answerRiddle3.value==answerX && randomNum=="3"){
        text.innerHTML="Correcto!!!";
        swal({
            text: "Bien hecho!!!",
            icon: "success",
        });
    }
    else if(answerRiddle4.value==answerX && randomNum=="4"){
        text.innerHTML="Correcto!!!";
        swal({
            text: "Bien hecho!!!",
            icon: "success",
        });
    }
    else if(answerRiddle5.value==answerX && randomNum=="5"){
        text.innerHTML="Correcto!!!";
        swal({
            text: "Bien hecho!!!",
            icon: "success",
        });
    }
    else{
        text.innerHTML="Vuelve a intentarlo";
        swal({
            text: "Ops!!!",
            icon: "error",
        });
    }
}
answerRiddle1.addEventListener('change' , respuesta);
answerRiddle2.addEventListener('change' , respuesta);
answerRiddle3.addEventListener('change' , respuesta);
answerRiddle4.addEventListener('change' , respuesta);
answerRiddle5.addEventListener('change' , respuesta);

const butonReset = document.querySelector('#reset');

function reloadPage(){
    window.location.reload();
}
butonReset.addEventListener('click', reloadPage)