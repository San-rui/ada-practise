const h2= Number(prompt("Ingrese la temperatura"))
const colorChanged = document.querySelector('#color-text')
let colorTitle=""

const colorH2 = (h2)=>{
    if(h2<0){
        colorTitle='#1a2dd9'
        colorChanged.style=`color:${colorTitle}`
    }
    else if(0<=h2 && h2<15){
        colorTitle='#0dcbd9;'
        colorChanged.style=`color:${colorTitle}`
    }
    else if(15<=h2 && h2<25){
        colorTitle='#0BD975'
        colorChanged.style=`color:${colorTitle}`
    }
    else if(25<=h2 && h2<30){
        colorTitle='#DEF88B'
        colorChanged.style=`color:${colorTitle}`
    }
    else if(30<=h2 && h2<35){
        colorTitle='#F07E35'
        colorChanged.style=`color:${colorTitle}`
    }
    else if(35<=h2){
        colorTitle='#D91F0D'
        colorChanged.style=`color:${colorTitle}`
    }
    
    console.log(colorTitle)
}
colorH2(h2)
