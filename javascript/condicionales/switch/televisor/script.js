const question=prompt("Desea encender el televisor?");
const container=document.querySelector('#container')


const answer = (a) => {
    if (a == "si") {
        container.style=`display: flex;`
    }
}

answer(question)

const channel= document.querySelector('#channel');
const volume=document.querySelector('#volume');

let channelNumber =document.querySelector('#channel-number');

const addNumber = () =>{
    channel.innerHTML= parseInt(channelNumber.value);
    if(channelNumber.value>99){
        alert(`El numero no puede ser mayor a 99`);
        channelNumber.value=99;
        channel.innerHTML= parseInt(channelNumber.value);
    }
}

channelNumber.addEventListener('change', addNumber);

//-----------SWITCH BOTTONES------

const botones=document.getElementsByTagName('button');

const televisor=(event)=>{
    
    const botonClickeado = event.target.value;

    switch (botonClickeado){
        case "next":
            channel.innerHTML= parseInt(channel.innerHTML)+1;
        break  

        case "previous":
            channel.innerHTML= parseInt(channel.innerHTML)-1;      
        break  

        case "rise":
            volume.innerHTML= parseInt(volume.innerHTML)+1;      
        break  

        case "down":
            volume.innerHTML= parseInt(volume.innerHTML)-1;      
        break

        case "mute":
            volume.innerHTML= 0;      
        break
    }
}

for (const button of botones) {
    console.log(button)
    button.addEventListener('click', televisor);
}

