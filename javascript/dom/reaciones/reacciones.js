const styleh3 = document.querySelector('h3');
styleh3.style=`font-Size:40px; font-family: 'Orelega One', cursive; color:#5063D9`

const stylep = document.querySelector('p')
stylep.style = `font-Size:20px; font-family: 'Orelega One', cursive; color:#D93F1A`

const sectionformat = document.querySelector('section')
sectionformat.style=`display:flex; flex-direction:row`

const stylediv1= document.getElementsByClassName('box')

for (let i=0; i < stylediv1.length; i++){
    stylediv1[i].style.backgroundColor="#A9BED9"; 
    stylediv1[i].style.borderRadius="20px";
    stylediv1[i].style.width="50px";
    stylediv1[i].style.height="40px";
    stylediv1[i].style.display= "flex";
    stylediv1[i].style. justifyContent="center";
    stylediv1[i].style.alignItems="center";
    stylediv1[i].style.margin="15px";
}

const stylespan = document.querySelector('#like')
const like = prompt("ingresar la cantidad de likes");
stylespan.innerHTML = like;

const stylespan2 = document.querySelector('#love')
const love = prompt("ingresar la cantidad de me encanta");
stylespan2.innerHTML = love;

const stylespan3 = document.querySelector('#awesome')
const awesome = prompt("ingresar la cantidad de me asombra");
stylespan3.innerHTML = awesome;



