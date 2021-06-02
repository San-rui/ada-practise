const add = document.querySelector('#add');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');

const sumar =()=>{
    let total=0;
    numeros = [5, 7, 10, 12, 24];
    for(let i of numeros) total+=i;
    text1.innerHTML=total;

    let total2=0;
    const NewArray = [[4, 5],[2, 7, 1],[8, 10]].reduce((a, b) => a.concat(b));
    for(let j of NewArray) total2+=j;
    text2.innerHTML=total2;
}

add.addEventListener('click', sumar)

