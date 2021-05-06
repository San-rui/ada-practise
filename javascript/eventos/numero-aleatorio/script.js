const title= document.querySelector('#title');
const answer2= document.querySelector('#addedNumber');
const randmNumberComputer= document.querySelector('#randmNumber-computer');
const resetPage= document.querySelector('button');
const h1=document.querySelector('h1')

const answer1=(event)=>{

        const rangeNum= Math.random() * (9 - 0);
        const randomNum=Math.round(rangeNum);
        answer2.innerHTML=event.keyCode-48;
        randmNumberComputer.innerHTML=randomNum;

        console.log(randomNum)
        if((event.keyCode-48)>randomNum){
            title.innerHTML='El número es más grande.'
            h1.innerHTML=" "};
        if((event.keyCode-48)==randomNum){
            title.innerHTML='Adivinaste'
            h1.innerHTML=" "};
        if((event.keyCode-48)<randomNum){
            title.innerHTML='El número es más chico.'
            h1.innerHTML=" "};
};

window.addEventListener('keyup', answer1);

const reloadPage=()=>{
    window.location.reload();
}

resetPage.addEventListener('click', reloadPage);
