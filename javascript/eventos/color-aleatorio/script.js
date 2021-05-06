const body= document.querySelector('body');

const colorChange=(event)=>{
    if( event.keyCode == 32){

        const redInit= Math.random() * (255 - 0);
        const red=Math.round(redInit);
        const greenInit= Math.random() * (255 - 0);
        const green=Math.round(greenInit);
        const blueInit= Math.random() * (255 - 0);
        const blue=Math.round(blueInit);
        
        body.style=`background-color:rgb(${red}, ${green}, ${blue})`;
    }
}

window.addEventListener('keyup', colorChange);
