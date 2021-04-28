const imgFormat= document.getElementsByClassName('smallSize');

const bigImg= document.querySelector('#imgBig');
bigImg.style=`height:500px;`

for(let i=0; i < imgFormat.length; i++){
    imgFormat[i].style.height="100px";

    const changeSize=()=>{   

        bigImg.setAttribute('src',imgFormat[i].src)
    }
    //Esto funciona si hago click sobre una de las imagenes
    //imgFormat[i].addEventListener('click', changeSize);
    imgFormat[i].addEventListener('mouseover', changeSize);
    
};




