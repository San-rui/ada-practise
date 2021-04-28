const imgFormat= document.getElementsByClassName('smallSize');

const bigImg= document.querySelector('#imgBig');
bigImg.style=`height:500px;`


for(let i=0; i < imgFormat.length; i++){
    imgFormat[i].style.height="100px";

    const changeSize=(e)=>{   
        const item= e.target
        const imagen= bigImg.getAttribute('src');
        bigImg.setAttribute('src','https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
    }

    imgFormat[i].addEventListener('click', changeSize);
};




