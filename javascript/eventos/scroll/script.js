const body = document.querySelector('#body');
body.style.height=`2500px`

const cambiaColor =()=>{
    if(0<window.scrollY && window.scrollY<=500) {
        body.style.backgroundColor="pink"
    } 
    else if(501<window.scrollY && window.scrollY<=1000) {
        body.style.backgroundColor="red"
    } 
    else if(1001<window.scrollY && window.scrollY<=1500) {
        body.style.backgroundColor="green"
    } 
    else if(1501<window.scrollY && window.scrollY<=2000) {
        body.style.backgroundColor="blue"
    }
}

window.addEventListener('scroll', cambiaColor);


