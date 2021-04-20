const styleh3 = document.querySelector('h3');
styleh3.style=`font-Size:40px; font-family: 'Orelega One', cursive; color:#5063D9`

const stylep = document.querySelector('p')
stylep.style = `font-Size:20px; font-family: 'Orelega One', cursive; color:#D93F1A`

const stylediv1= document.querySelector('#box-1')
stylediv1.style=`margin:25px; 
                background-color:#A9BED9; 
                border-radius:20px; 
                width:80px;
                height:40px;
                display: flex;
                justify-content: center;
                align-items: center;`

const stylediv2= document.querySelector('#box-2')
stylediv2.style=`margin:25px; 
                background-color:#A9BED9; 
                border-radius:20px; 
                width:80px;
                height:40px;
                display: flex;
                justify-content: center;
                align-items: center;`

const stylediv3= document.querySelector('#box-3')
stylediv3.style=`margin:25px; 
                background-color:#A9BED9; 
                border-radius:20px; 
                width:80px;
                height:40px;
                display: flex;
                justify-content: center;
                align-items: center;`

const stylespan = document.querySelector('#like')
const like = prompt("ingresar la cantidad de likes");
stylespan.innerHTML = like;

