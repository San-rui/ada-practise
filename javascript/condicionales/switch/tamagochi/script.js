const salud=document.querySelector('#salud');
const felicidad=document.querySelector('#felicidad');
const limpieza=document.querySelector('#limpieza');
const energia=document.querySelector('#energia');

salud.innerHTML= Math.round(Math.random() * (10 - 1));
felicidad.innerHTML= Math.round(Math.random() * (10 - 1));
limpieza.innerHTML= Math.round(Math.random() * (10 - 1));
energia.innerHTML= Math.round(Math.random() * (10 - 1));


const botones=document.getElementsByTagName('button');

const adatochi=(event)=>{
    
    const botonClickeado = event.target.value;

    switch (botonClickeado){
        case "alimentar":
            felicidad.innerHTML= parseInt(felicidad.innerText)+2;    
            energia.innerHTML= parseInt(energia.innerText)+3;  
    
        break

        case "jugar":
            felicidad.innerHTML= parseInt(felicidad.innerText)+2;    
            energia.innerHTML= parseInt(energia.innerText)-2; 
            limpieza.innerHTML= parseInt(limpieza.innerText)-1; 
        break

        case "dormir":
            salud.innerHTML= parseInt(salud.innerText)+2;    
            energia.innerHTML= parseInt(energia.innerText)+5; 
            limpieza.innerHTML= parseInt(limpieza.innerText)-2; 
        break
        
        case "vacunar":
            salud.innerHTML= parseInt(salud.innerText)+5;    
            felicidad.innerHTML= parseInt(felicidad.innerText)-6; 
        break

        case "bañar":
            salud.innerHTML= parseInt(salud.innerText)+3;    
        break

        case "retar":
            felicidad.innerHTML= parseInt(felicidad.innerText)-3; 
        break

        case "acariciar":
            felicidad.innerHTML= parseInt(felicidad.innerText)+4; 
        break
    }
}

for (const button of botones) {
    console.log(button)
    button.addEventListener('click', adatochi);
}