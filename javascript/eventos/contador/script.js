const resultado=document.querySelector('p')
const menosUno=document.querySelector('#menosUno')
const masUno=document.querySelector('#masUno')
const menosCinco=document.querySelector('#menosCinco')
const masCinco=document.querySelector('#masCinco')
const menosDiez=document.querySelector('#menosDiez')
const masDiez=document.querySelector('#masDiez')



menosUno.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)-1
})
masUno.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)+1
})
menosCinco.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)-5
})
masCinco.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)+5
})
menosDiez.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)-10
})
masDiez.addEventListener('click', ()=>{
    resultado.innerText=Number(resultado.innerText)+10
})
