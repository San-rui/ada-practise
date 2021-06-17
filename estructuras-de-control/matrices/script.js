// //---Obtener número mayor---
// const matriz=[[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],];

// const obtenerNumeroMayor=(matriz)=>{
//     return Math.max(...[].concat(...matriz));
// }

// obtenerNumeroMayor(matriz);

// //-----Sumar----
// const matriz=[[4, 5],[2, 7, 1],[8, 10],];

// const sumar =(matriz)=>{
//     let total=0;
//     const NewArray = matriz.reduce((a, b) => a.concat(b));
//     for(let j of NewArray) total+=j;
//     return total;
// }
// sumar(matriz);

// //---Es matriz cuadrada---
// const matriz=[[4, 5],[2, 7, 1],[8, 10],];

// const esMatrizCuadrada =(matriz)=>{
    
//     let resultado=""
//     for( let i=0; i<matriz.length; i++){
//         for(let j=0; j<matriz[i].length; j++){
//             resultado=(i===j)
//         }
//     }
//     return resultado
// }
// esMatrizCuadrada(matriz);

// //---Generar grilla----
// const filas=6;
// const columnas=3;
// const items=[1, 2]

// const generarGrilla =(filas, columnas, items)=>{
//     let newArray=[];
//     for ( let i = 1; i <= filas; i++) {
//         let aux = []
//         for ( let j = 0; j < columnas; j++ ){
//             let item = items[Math.floor(Math.random()*items.length)];
//             aux.push(item)
//         }
//         newArray.push(aux)
//     }
//     return newArray;
// }
// generarGrilla(filas, columnas, items);

// //-----Generar matriz escalonada----
// const filas=3;

// const generarMatrizEscalonada = (filas) => {
//     let miarray = []
//     for ( let i = 1; i <= filas; i++) {
//         let aux = []
//         for ( let j = 0; j < i; j++ ){
//         aux.push(0)
//     }
//     miarray.push(aux)
    
//     }
//     return miarray
// }

// generarMatrizEscalonada(filas);


// //----Obtener fila más larga----
// const matriz=[[1, 4], [3, 7, 5], [1]];

// const obtenerFilaMasLarga=(matriz)=>{
//     let resultado="";
//     let newArray=[];
//     let newArray2=[];
//     let max="";
//     for(let i=0; i<matriz.length; i++){

//     newArray.push(matriz[i].length)
//     max = Math.max(...newArray);
//     }
//     resultado = matriz.filter((item) =>{
//         return item.length === max
//     });  
//     return resultado[0];
// }

// obtenerFilaMasLarga(matriz);