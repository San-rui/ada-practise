const winNumber=document.querySelector('#win-number');
const play= document.querySelector('#play')
const color=document.querySelector('#color');
const parInpar =document.querySelector('#par-inpar');
const altaBaja = document.querySelector('#alta-baja');
const docena= document.querySelector('#docena');

let resultaColor="";
let resultadoParImpar="";
let resultadoAltaBaja="";
let resultadoDoccena="";



const jugar = () => {
    const rangeNum= Math.random() * (36 - 1);
    const randomNum=Math.round(rangeNum);
    winNumber.innerHTML=randomNum;
    if(randomNum%2!=0 && randomNum<10 && randomNum>1 || randomNum%2===0 && randomNum>11 && randomNum<19 || randomNum%2!=0 && randomNum>18 && randomNum<28 || randomNum%2===0 && randomNum>29 && randomNum<37){
        color.innerHTML="rojo, ";
        resultaColor="rojo"
        if(randomNum%2===0){
            parInpar.innerHTML="par,";
            resultadoParImpar="par";
            if(randomNum<19){
                altaBaja.innerHTML="baja ";
                resultadoAltaBaja="baja";
                if(randomNum<13){
                    docena.innerHTML="primer docena.";
                    resultadoDoccena="primer docena";}
                else if(randomNum>12){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
            }
            else{
                altaBaja.innerHTML="alta ";
                resultadoAltaBaja="alta";
                if(randomNum>12 && randomNum<25){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
                else if(randomNum>24){
                        docena.innerHTML="tercer docena.";
                        resultadoDoccena="tercer docena";}   
            }
        }
        else{
            parInpar.innerHTML="impar, ";
            resultadoParImpar="impar"
            if(randomNum<19){
                altaBaja.innerHTML="baja ";
                resultadoAltaBaja="baja";
                if(randomNum<13){
                    docena.innerHTML="primer docena.";
                    resultadoDoccena="primer docena";}
                else if(randomNum>12){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
            }
            else{
                altaBaja.innerHTML="alta ";
                resultadoAltaBaja="alta"
                if(randomNum>12 && randomNum<25){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
                else if(randomNum>24){
                        docena.innerHTML="tercer docena.";
                        resultadoDoccena="tercer docena";}
            }
        }
    }
    else{
        color.innerHTML="negro, ";
        resultaColor="negro";
        if(randomNum%2===0){
            parInpar.innerHTML="par, ";
            resultadoParImpar="par";
            if(randomNum<19){
                altaBaja.innerHTML="baja";
                resultadoAltaBaja="baja";
                if(randomNum<13){
                    docena.innerHTML="primer docena.";
                    resultadoDoccena="primer docena";}
                else if(randomNum>12){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
            }
            else{
                altaBaja.innerHTML="alta";
                resultadoAltaBaja="alta";
                if(randomNum>12 && randomNum<25){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
                else if(randomNum>24){
                        docena.innerHTML="tercer docena.";
                        resultadoDoccena="tercer docena";}
            }
        }
        else{
            parInpar.innerHTML="impar, ";
            resultadoParImpar="impar";
            if(randomNum<19){
                altaBaja.innerHTML="baja";
                resultadoAltaBaja="baja";
                if(randomNum<13){
                    docena.innerHTML="primer docena.";
                    resultadoDoccena="primer docena";}
                else if(randomNum>12){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena";}
            }
            else{
                altaBaja.innerHTML="alta";
                resultadoAltaBaja="alta"
                if(randomNum>12 && randomNum<25){
                    docena.innerHTML="segunda docena.";
                    resultadoDoccena="segunda docena"}
                else if(randomNum>24){
                        docena.innerHTML="tercer docena.";
                        resultadoDoccena="tercer docena";}
            }
        }
    }
}

play.addEventListener('click', jugar);

const rojo=document.querySelector('#rojo');
const negro=document.querySelector('#negro');
const par=document.querySelector('#par');
const impar=document.querySelector('#impar');
const alta=document.querySelector('#alta');
const baja=document.querySelector('#baja');
const primerDocena=document.querySelector('#primer-docena');
const segundaDocena=document.querySelector('#segunda-docena');
const tercerDocena=document.querySelector('#tercer-docena');
const bet=document.querySelector('#bet');
const answerBet=document.querySelector('#answer-bet');
let colorBet="";
let parImpar="";
let altaBaja1="";
let docenas="";

const betAdded=(event)=>{
    const botonClickeado = event.target.value;

    switch (botonClickeado){
        case "red":
        rojo.style=`background-color:#FA5DC4; color: white;`;
        colorBet="rojo";
        console.log(colorBet);
        break

        case "black":
        negro.style=`background-color:#FA5DC4; color: white;`;
        colorBet="negro";
        break

        case "even":
        par.style=`background-color:#FA5DC4; color: white;`;
        parImpar="par";
        break

        case "odd":
        impar.style=`background-color:#FA5DC4; color: white;`;
        parImpar="impar";
        break

        case "high":
        alta.style=`background-color:#FA5DC4; color: white;`;
        altaBaja1="alta";
        break
    
        case "low":
        baja.style=`background-color:#FA5DC4; color: white;`;
        altaBaja1="baja";
        break

        case "firstDozen":
        primerDocena.style=`background-color:#FA5DC4; color: white;`;
        docenas="primer docena";
        break
        
        case "secondDozen":
        segundaDocena.style=`background-color:#FA5DC4; color: white;`;
        docenas="segunda docena";
        break

        case "thirdDozen":
        tercerDocena.style=`background-color:#FA5DC4; color: white;`;
        docenas="tercer docena";
        break
        
    }
}

rojo.addEventListener('click', betAdded);
negro.addEventListener('click', betAdded);
baja.addEventListener('click', betAdded);
alta.addEventListener('click', betAdded);
par.addEventListener('click', betAdded);
impar.addEventListener('click', betAdded);
primerDocena.addEventListener('click', betAdded);
segundaDocena.addEventListener('click', betAdded);
tercerDocena.addEventListener('click', betAdded);

const winOrNot= document.querySelector('#win-or-not');

const checkBet =() =>{
    console.log("hola")
    if(colorBet==resultaColor  && parImpar==resultadoParImpar && altaBaja1==resultadoAltaBaja && resultadoDoccena==docenas){
        console.log("correcto")
        winOrNot.innerHTML="Felicitaciones has GANADO!!!"
    }
    else{
    winOrNot.innerHTML="Sigue participando"
    }
}

answerBet.addEventListener('click', checkBet);

const reset= document.querySelector('#reset')

function reloadPage(){
    window.location.reload();
}
reset.addEventListener('click',reloadPage);