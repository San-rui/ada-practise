const pin= document.querySelector('#pin');
const boxButton=document.querySelector('#box-button');

const pinChecked =(event)=>{
    
    if( event.keyCode === 13)
    {event.preventDefault();
        if(pin.value=="1234"){
        boxButton.style=`display:flex`;
        }
    }
}
pin.addEventListener('keydown', pinChecked);

const botones=document.getElementsByTagName('button');
const formExtraer=document.querySelector('#form-extraer');
const formTrasferir = document.querySelector('#form-trasferir');
const formDepositar = document.querySelector('#form-depositar');
const formPin = document.querySelector('#form-pin');

const atm =(event)=>{
    const botonClickeado = event.target.value;
    switch (botonClickeado){
        case "extraer":
            formExtraer.style=`display:flex`;
            formTrasferir.style=`none`;
            formDepositar.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "transferir":
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:flex`;
            formDepositar.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "depositar":
            formDepositar.style=`display:flex`;
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:none`;
            formPin.style=`display:none`;
        break

        case "cambiar-pin":
            formPin.style=`display:flex`;
            formDepositar.style=`display:none`;
            formExtraer.style=`display:none`;
            formTrasferir.style=`display:none`;
        break

        case "salir":
            boxButton.style=`display:none`;
            alert(`Hasta pronto`);
        break
    }

}

for (const button of botones) {
    console.log(button)
    button.addEventListener('click', atm);
}

const inputExtraer = document.querySelector('#input-extraer');
const initialMoney = document.querySelector('#initial-money');
console.log(typeof(parseInt(initialMoney.innerHTML)));

const removeMoney = () =>{
    console.log(inputExtraer.value)
    if(inputExtraer.value>parseInt(initialMoney.innerHTML)){
        alert(`El valor debe ser menor o igual al saldo inicial`);}
    else if(inputExtraer.value<=parseInt(initialMoney.innerHTML)){
        initialMoney.innerHTML=parseInt(initialMoney.innerHTML)-inputExtraer.value;
        alert(`Operación exitosa`);
    }
}
inputExtraer.addEventListener('change', removeMoney);

const inputTransferir = document.querySelector('#input-transferir');
const cbu= document.querySelector('#cbu');
const cbu1 ="A1234";
const cbu2 ="B5678";
const cbu3 ="C9101";

const sendMoney =()=>{
    console.log(cbu.innerHTML)
    if((cbu.value==cbu1 || cbu.value==cbu2 || cbu.value==cbu3) && inputTransferir.value<=parseInt(initialMoney.innerHTML)){
        initialMoney.innerHTML=parseInt(initialMoney.innerHTML)-inputTransferir.value;
        alert(`Operación exitosa`);
    }
    else{
        alert(`El CBU o alias ingresado no es correcto o el valor a transferir es mayor que el valor inicial.`)
    }
}
inputTransferir.addEventListener('change', sendMoney);

const inputDepocitar= document.querySelector('#input-depositar');

const addMoney =()=>{
    initialMoney.innerHTML=parseInt(initialMoney.innerHTML)+ parseInt(inputDepocitar.value);
    alert(`Operación exitosa`);
}
inputDepocitar.addEventListener('change', addMoney);

const newPin= document.querySelector('#new-pin');
const oldPin= document.querySelector('#old-pin');

const changePin =()=>{
    if(oldPin.value==pin.value){
        pin.value=newPin.value;
        console.log(pin.value)
        alert(`Pin cambiado correctamente`)
    }
    else{
        alert(`El PIN anterior no coincide`)
    }
}

oldPin.addEventListener('change', changePin);