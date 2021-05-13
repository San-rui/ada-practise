
let kilometros=document.getElementById('idKm');
let millas=document.getElementById('idMilla');

const calculo=(event)=>{
  if (event.target.name==='kilometros'){
      millas.value=kilometros.value*1.61;
  } else if (event.target.name==='millas'){
      kilometros.value=millas.value*0.62;
  }
}

kilometros.addEventListener('keyup',calculo);
millas.addEventListener('keyup',calculo);