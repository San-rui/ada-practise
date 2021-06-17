// ------Repetir letras------------

// const palabra ='hola';
// const cantidad = 2

// const repetirLetras=(palabra, cantidad)=>{
//     let separar =palabra.split('');

//     let repetir= separar.map(separar=>separar.repeat(cantidad))
//     return repetir.join('') 
// }
//     repetirLetras(palabra, cantidad);

// ------Capitalizar palabras--------
// const string= 'esto es un título'

// const capitalizarPalabras=(string)=>{
//     return string.toLowerCase().split(' ').map(function(Word) {
//             return Word[0].toUpperCase() + Word.substr(1);
//     }).join(' ');
// };

// capitalizarPalabras(string);

// ------Sumar sección--------
// const array= [2, 2, 4, 3, 10, 20, 5];
// const comienzo= 0;
// const cantidad= 3;

// const sumarSeccion =(array, comienzo, cantidad)=>{
//     return (array.splice(comienzo, cantidad)).reduce((a, b) => a + b, 0)
    
// }
// sumarSeccion (array, comienzo, cantidad);

// ------Es subconjunto--------

// const conjunto =[ 1, 2]
// // const subconjunto =[1]

// const esSubconjunto=(conjunto,subconjunto)=>{
//     let resultado= '';
//     for (let i=0;  i<conjunto.length; i++)

//     for (let j=0; j<subconjunto.length; j++)

//     resultado=!(conjunto.includes(subconjunto[j]) ) 

// return resultado

// }    

// // esta planteado al reves porque el ejercicio de mumuki estaba invertido

// esSubconjunto(conjunto,subconjunto);

// ------Tiene bloque--------

// const array=[1, 2, 3, 3, 3, 8]

// const tieneBloque=(array)=>{
    
//     let resultado="";
//     for(let i=0; i<array.length; i++){
//         console.log(array[i])
//         if (array[i]===array[i+1] && array[i+1]===array[i+2]){
    
//         console.log("elemento repetido",array[i]);
//         resultado= true;
//         }
//         else{ resultado= false}
//     }
//     console.log(resultado)
//     return resultado;
// }

// tieneBloque(array);

// // ------Es palindromo--------
// const palabra="mama"

// const esPalindromo=(palabra)=>{
//     let newWord=palabra.split("").reverse().join("");
//     return palabra===newWord;
// }

// esPalindromo(palabra)