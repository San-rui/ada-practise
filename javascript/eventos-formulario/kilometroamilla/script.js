const millas= document.querySelector('#idMilla');
const kilometros= document.querySelector('#idKm');

const imprimirMilla=(event)=>{

    console.log(event.target.value)

  
}
millas.addEventListener ('input', imprimirMilla);


let kilometros=document.getElementById('kilometros');
let millas=document.getElementById('millas');

const calculo=(event)=>{
    if(event.target.name==='kilometros') {
   millas.value = kilometros.value * 1.61;

  }  else if (event.target.name==='millas') {
    kilometros.value = millas.value * 0.62;

  } 
};

kilometros.addEventListener('keyup',calculo);
millas.addEventListener('keyup',calculo);
