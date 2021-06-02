const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const button= document.querySelector('#button')
const matriz1=([[4, 5],[2, 7, 1],[8, 10],]);
const matriz2=([[4, 5, 9],[2, 7, 1],[8, 10, 5],])

const size =(ar)=>{
    let row_count = ar.length;
    let row_sizes = []
    for(let i=0;i<row_count;i++){
        row_sizes.push(ar[i].length)}
    return [row_count, Math.min.apply(null, row_sizes)]
}

const size1 = size(matriz1);
const size2 = size(matriz2);

const check1 =()=>{
        if (size1[0]==size1[1]){
            text1.innerHTML=true;}
        else {
            text1.innerHTML=false;}
}
button.addEventListener('click', check1);

const check2 =()=>{
    if (size2[0]==size2[1]){
        text2.innerHTML=true;}
    else{
        text2.innerHTML=false;}
}
button.addEventListener('click', check2);
