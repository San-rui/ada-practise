const img = prompt("Ingrese el tamaño de la imagen chica, mediana o grande");
const tamanioImg= document.querySelector('#size-img');
let size = ""

const sizeSelector = (img)=>{
    if(img=='chica'){
        size='200px;'
        tamanioImg.style=`width:${size}`
    }
    else if (img=='mediana'){
        size='500px;'
        tamanioImg.style=`width:${size}`
    }
    else if (img=='grande'){
        size='800px;'
        tamanioImg.style=`width:${size}`
    }
    console.log(size)
}
sizeSelector(img)





