const formatBox = document.querySelector('.box')
formatBox.style=`width:500px; border: 2px solid black; border-radius:10px; box-shadow: 7px 6px 5px 0px rgba(0,0,0,0.75); font-family: 'Shadows Into Light', cursive;`

const americaContinent= document.getElementsByClassName('america')
const asiaContinent= document.getElementsByClassName('asia')
const africaContinent=document.getElementsByClassName('africa')
const europaContinent=document.getElementsByClassName('europa')
const oceaniaContinent=document.getElementsByClassName('oceania')

const question=prompt("Ingrese un continente: America, Asia, Oceania, Europa o Africa")

const paisesColor=(a)=>{
    if(a=="America"){
        for(let i=0; i< americaContinent.length; i++){
            americaContinent[i].style.color="red";
            americaContinent[i].fontWeight="bold";
        }
    }
    else  if(a=="Asia"){
        for(let i=0; i< asiaContinent.length; i++){
            asiaContinent[i].style.color="red";
            asiaContinent[i].style.fontWeight="bold";
        }
    }
    else  if(a=="Europa"){
        for(let i=0; i< europaContinent.length; i++){
            europaContinent[i].style.color="red";
            europaContinent[i].style.fontWeight="bold";
        }
    }
    else  if(a=="Oceania"){
        for(let i=0; i< oceaniaContinent.length; i++){
            oceaniaContinent[i].style.color="red";
            oceaniaContinent[i].style.fontWeight="bold";
        }
    }
    else  if(a=="Africa"){
        for(let i=0; i< africaContinent.length; i++){
            africaContinent[i].style.color="red";
            africaContinent[i].style.fontWeight="bold";
        }
    }
}
paisesColor(question);
