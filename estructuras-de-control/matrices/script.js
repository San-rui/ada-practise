// // //---Obtener número mayor---
// const matriz=[[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],];

// const obtenerNumeroMayor=(matriz)=>{
//     console.log(Math.max(...[].concat(...matriz)))
//     return Math.max(...[].concat(...matriz));
// }

// obtenerNumeroMayor(matriz);

// // //-----Sumar----
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

//-----Obtener cantidad----
// const items=[['🍎', '🍏', '🍌', '🍌'],['🍌', '🍎'],['🍎', '🍏', '🍌'],['🍏', '🍌', '🍎', '🍌']];
// const item="🍎";

// const obtenerCantidad=(item, items)=>{
//     let respuesta=0;

//     for(let i=0; i<items.length; i++){
//         for(let j=0; j<items[i].length; j++){
//             if(items[i][j]===item){
//                 respuesta=respuesta+1
        
//             }
//         }
//     }
//     console.log(respuesta)
//     return respuesta;
    
// }

// obtenerCantidad(item, items);

//-------Convertir en matriz-----
// const columnas=2;
// const array=[1, 2, 3, 4];

// const convertirEnMatriz=(columnas, array)=>{
//     let newMatrix=[];
//     let elemento="";


//     for(let i=0; i<array.length; i++){
//         elemento= array[i];
//         console.log(elemento);
        
//     }
    

//     for(let k=0; k<((array.length)/columnas); k++){
//         let aux = [];
//         for(let j=0; j<columnas; j++){
//             aux.push(elemento)
//         }
//         newMatrix.push(aux)
        
//     }
//     console.log("Esta es la matriz final", newMatrix);
//     return newMatrix;

// }

// convertirEnMatriz(columnas, array);


//-----Consultar tabla----
// const id= 2;
// const columna= 'nombre'
// const tabla= [['id', 'nombre', 'edad', 'email'],[1, 'Ada', 33, 'ada@gmail.com'],[2, 'Grace', 45, 'grace@gmail.com'],]

// const consultarTabla=(id, columna, tabla)=>{
//     for(let i=0; i<tabla.length; i++){
//         for(let j=0; j< tabla[i].length; j++){
//             let numero= tabla[i].indexOf(columna)
//             console.log(numero)
//             console.log(tabla[id][numero])
//             return tabla[id][numero];
//         }
//     }
    
// }

// consultarTabla(id, columna, tabla)

//-------Tiene bloque horizontal------

// const matriz=[
//     [1, 2, 3, 4],
//     [1, 2, 2, 2],
//     [1, 2, 4, 5],
//   ]

// const tieneBloqueHorizontal=(matriz)=>{
//     let resultado="";
//     for(let j=0; j< matriz.length; j++){
//         for (let i=0; i < matriz[j].length; i++){
//             if (matriz[j][i]=== matriz[j][i+1] && matriz[j][i+1]=== matriz[j][i+2]){
        
//                     resultado = (matriz[j][i]=== matriz[j][i+1] && matriz[j][i+1]=== matriz[j][i+2]);
//                 }
//             }
//     }
//     console.log(resultado)
//     return resultado;

// }

// tieneBloqueHorizontal(matriz)

//-----Tiene bloque vertical-----
// const matriz=[ [3, 4], 
//                 [9, 4], 
//                 [4, 5], 
//                 [1, 5], 
//                 [1, 4], 
//                 [4, 5] ];

// const tieneBloqueHorizontal=(matriz)=>{
//     let matrizT=[];

//     for (let row = 0; row < matriz.length; row++) {
        
//         for (let column = 0; column < row; column++) {
//           let temp = matriz[row][column]
//           matriz[row][column] = matriz[column][row]
//           matriz[column][row] = temp
//         }
//       }
//       console.log(matriz)
//       matrizT= matriz;

//     let resultado="";
//     for(let j=0; j< matrizT.length; j++){
//         for (let i=0; i < matrizT[j].length; i++){
//             if (matrizT[j][i]=== matrizT[j][i+1] && matrizT[j][i+1]=== matrizT[j][i+2]){
        
//                     resultado = (matrizT[j][i]=== matrizT[j][i+1] && matrizT[j][i+1]=== matrizT[j][i+2]);
//             }
//         }
//     }
//     console.log(resultado)
//     return resultado;

// }


// const tieneBloqueVertical = (matriz)  => {
//     for(const indiceX in matriz[0]){
//       let ant = null;
//       let cont = 0;
//       for(const indiceY in matriz){
//         if(ant==matriz[indiceY][indiceX]){
//           cont++;
//         }
//         console.log(matriz[indiceY][indiceX],ant,cont);
//         if(cont==2){
//           return true;
//         }
//         ant = matriz[indiceY][indiceX]
  
//       }
//     }
  
//     return false;
//   }

// tieneBloqueVertical(matriz)

