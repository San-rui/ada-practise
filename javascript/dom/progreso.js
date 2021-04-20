const barra1 = document.querySelector('#barra-total')
barra1.style=`width:500px; height:30px; background-color:#9CD9D5; marginBottom:20px`

const progress = Number(prompt("Ingrese un porcentaje de progreso"))
const barra2 = document.querySelector('#barra-interior')

let percent =((progress*500)/100)

barra2.style= `width:${percent}px; height:30px; background-color:#D678A2`
console.log(percent)


