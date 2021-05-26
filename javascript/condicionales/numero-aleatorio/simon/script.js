const printArrayColor = document.getElementById ('simon-box');
const playSimon = document.getElementById ('play-simon');
const simonColor = [" rojo", " amarillo", " verde", " azul"];
let newArrayColor = [];
const startGame = document.getElementById ('start-game');
const colorBox = document.querySelector ('.color-box');
const red = document.getElementById ('rojo');
const yellow = document.getElementById ('amarillo');
const green = document.getElementById ('verde');
const blue = document.getElementById ('azul');
let newArrayColor2 = [];
const chekResult = document.getElementById ('cheked');


const PrintColorSimon =()=>
{       
    for (i = 0; i < 5; i++) {
        let PositionColor = Math.round(Math.random()*3);
        newArrayColor.push(simonColor[PositionColor]);
        console.log(newArrayColor)
        printArrayColor.innerHTML = newArrayColor;
        printArrayColor.style='display: block';
        startGame.style= 'display: block';
        playSimon.style= 'display: none';
    }
}
playSimon.addEventListener('click', PrintColorSimon);


const showButtons =()=> {
    printArrayColor.style = 'display: none';
    colorBox.style= 'display: flex';
    startGame.style= 'display: none';
}
startGame.addEventListener('click',showButtons)

const printColorHuman=(event)=> {
    const buttonClicked = event.target.value;
    if (buttonClicked) {
        newArrayColor2.push(buttonClicked);
        console.log (newArrayColor2)
    } 
}
/*play-simonrayColor == newArrayColor2){
    console.log('ganó')
} */
red.addEventListener('click', printColorHuman)
blue.addEventListener('click', printColorHuman)
yellow.addEventListener('click', printColorHuman)
green.addEventListener('click', printColorHuman)


const printResult =()=> {
    if(newArrayColor[0]==newArrayColor2[0] && newArrayColor[1]==newArrayColor2[1] && newArrayColor[2]==newArrayColor2[2] && newArrayColor[3]==newArrayColor2[3] && newArrayColor[4]==newArrayColor2[4] ) {
        swal("Good job!", "You clicked the button!", "success"); }
    else {swal({
        text: "Ops!!!",
        icon: "error",
        }); 
    }
}
chekResult.addEventListener('click', printResult)

const reset = document.querySelector('#reset');

function reloadGuess(){
    window.location.reload();
}
reset.addEventListener('click', reloadGuess)
