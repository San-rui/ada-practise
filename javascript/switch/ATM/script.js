const pin= document.querySelector('#pin');
const boxButton=document.querySelector('#box-button');

const pinChecked =(event)=>{
    
    if( event.keyCode === 13)
    {event.preventDefault();
        if(pin!==""){
        boxButton.style=`display:flex`;
        }
    }
}

pin.addEventListener('keydown', pinChecked);


const botones=document.getElementsByTagName('button');
const formExtraer=document.querySelector('#form-extraer');
const inputExtraer = document.querySelector('#input-extraer');

const atm =(event)=>{
    const botonClickeado = event.target.value;
    switch (botonClickeado){
        case "extraer":
            formExtraer.style=`display:flex`;
            inputExtraer.value
        break

        case "depositar":
        break

        case "transferir":
        break

        case "cambiar-pin":
        break

        case "salir":
        break
    }

}

for (const button of botones) {
    console.log(button)
    button.addEventListener('click', atm);
}