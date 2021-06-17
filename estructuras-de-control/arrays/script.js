// //---Obtener menor----

// const numeros= [5, 7, 99, 34, 54, 2, 12];


// const obtenerMenor = () =>{
//     for(const num of numeros){

//         let min=Math.min(... numeros)
//         console.log(min);
//         return
//     }
// }

// obtenerMenor(numeros);

// //----sumar---
// const numeros= [5, 7, 10, 12, 24]

// const sumar=(numeros)=>{
//     let total=0;
//       for(let i of numeros) {
//         total+=i;}
//     return total;
//   }

// //---contiene----

// const numeros= [5, 7, 99, 34, 54, 2, 12];
// const numero= 54;

// const contiene=(numero, numeros)=>{

//     for(const num of numeros){
//     return numeros.includes(numero);

//     }
// }
// contiene(numero, numeros);


// //----Ivertir caso---
// const palabra='Ada Lovelace';

// const invertirCaso =(palabra)=>{
//     let resultado="";
//     for(const letra of palabra){
//       if(letra===letra.toUpperCase()){
//         resultado=resultado + letra.toLowerCase();
//       }
//       else{
//         resultado=resultado + letra.toUpperCase();
//       }
//     }
//     return resultado;
// }
// invertirCaso(palabra);

// //----Gano---

// const tragamonedas=['⭐', '⭐️', '⭐️', '💫', '✨'];

// const gano = (tragamonedas) => {
//     let resultado = true;

//     for (let i = 0; i < 4; i++) {
//         if (tragamonedas[i] !== tragamonedas[i + 1]) {
//             resultado = false;
//         }
//     }
//     return resultado;
// };

// gano(tragamonedas);

// //---estan juntos---

// const personajes=['Sam', 'Frodo', 'Legolas'];

// const estanJuntos=(personajes)=>{
//     const FRODO="Frodo";
//     const SAM="Sam"
//     for(let i=0; i<personajes.length; i++){
//         if((personajes[i]===SAM && personajes[i+1]===FRODO )|| (personajes[i]===SAM && personajes[i-1]===FRODO)){       
//             return true;
//         }
//     }
//     return false;
// }

// estanJuntos(personajes)
// //---separar----

// // const grupo='🐶🐱🐶🐱🐱🐶🐶';

// // const separar =(arrayAnimales)=>{
// //     const grupo= arrayAnimales.join("");
// //     const gato=grupo.replace(/🐶/g, "");

// //     const perro=grupo.replace(/🐱/g, "");
// //     const unir= perro+gato;
// //     console.log({grupo, gato, perro, unir});
// //     return unir.split(/.*?/u);
// // }

// // separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶']);

// //---sObtener chat status----

// // const usuarias= ['Ada', 'pedro', 'pame'];

// // const obtenerChatStatus =(usuarias)=>{
// //     let resultado="";

// //     for (let i=0; i<usuarias.length; i++){
// //         if (i<1){
            
// //             resultado= `${usuarias[0]} conectada`;
// //             console.log(resultado)
// //         }

// //         else if( i>=1 && i<2){
// //             resultado= `${usuarias[0]} y ${usuarias[1]} están conectadas`;
// //             console.log(resultado)
// //         }

        
// //         else {
// //             resultado=`${usuarias[0]}, ${usuarias[1]} y 1 persona(s) están conectadas`;
// //             console.log(resultado);
// //         }
// //     }
// //     return resultado;
// // }

// // obtenerChatStatus(usuarias);


// //---Germinar----

// // const plantines=('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱');

// // const germinar =(plantines)=>{
// //     const grupo = Array.from(plantines);
// //     for(let i=0; i<grupo.length; i++){
        
// //         if(grupo[i+1]==="🌱" && grupo[i]==="🌷"){
// //             grupo[i+1]="🌷"; 
// //         }
// //         else if(grupo[i+1]==="🌱" && grupo[i]==="🌻"){
// //             grupo[i+1]="🌻"; 
// //         }
// //         else if(grupo[i+1]==="🌱" && grupo[i]==="🌸"){
// //             grupo[i+1]="🌸"; 
// //         }
// //     }
// //     const final=grupo.join("");
// //     console.log(final);
// //     return final;
// // }
// // germinar(plantines);

// //----Comer----
// // const string= ('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷');

// // const comer=(string)=>{

// //     const newArray=Array.from(string);
// //     let positionRabit="";
// //     let positionStop="";

// //     for (let i=0; i<newArray.length; i++){

// //         switch (newArray[i]){
// //             case("🐰"):
// //             positionRabit=i;
// //             break

// //             case("🚫"):
// //             positionStop=i;
// //             break
// //         }
// //     }
// //     newArray.splice(positionRabit, (positionStop-positionRabit+1));

// //     return newArray.join("");
// // }

// // comer(string);

// //---Multiplicar---

// // const multiplicador=2;
// // const numeros=[5, 7, 15, 22, 40];

// // const multiplicar=(multiplicador, numeros)=>{
// //         let NewArray=[];
// //     for (let i = 0; i < numeros.length; i++){
// //         let resultado = multiplicador * numeros[i];
// //         console.log(resultado);
// //         const newArray1= NewArray.push(resultado);
        
// //     }
// //     console.log(NewArray);
// //     return NewArray;
// // }

// // multiplicar(multiplicador, numeros);

// //---Filtrar por longitud mayor a---

// // const longitud=4;
// // const palabras=['dia','remolacha','azul','sorpresa','te','verde',];

// // const filtrarPorLongitud =(longitud, palabras)=>{
// //   let newArray=[];

// //   for(let i=0; i<palabras.length; i++){
// //       if(palabras[i].length>longitud){
// //           const newArray1=newArray.push(palabras[i])
// //       }
// //   }
// //   console.log(newArray);
// //   return newArray;
// // }
// // filtrarPorLongitud(longitud, palabras);

// //----Recortar----

// // const cantidadLetras=4;
// // const palabras=['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'];

// // const recortar = (cantidadLetras, palabras) =>{

// //     let newArray=[];
// //     for(let i=0; i<palabras.length; i++){
// //         if (palabras[i].length>cantidadLetras){
// //             let resto = palabras[i].slice(0, cantidadLetras);
// //             const newArray1=newArray.push(resto)
// //         }
// //     }
// //     return newArray;
// // }

// // recortar(cantidadLetras, palabras);

// //---Son iguales---
// const a=[10, 25, 6, 33, 48, 105];
// const b=[10, 25, 6, 33, 48, 105];

// const sonIguales =(a, b) =>{
//     return  JSON.stringify(a)==JSON.stringify(b)
// }

// sonIguales(a, b);

// //--Obtener resultado---

// // const jugadoraA='Ada';
// // const jugadoraB='Grace';
// // const puntajesA= [4, 4, 4];
// // const puntajesB= [1, 2, 3];

// // const obtenerResultado =(jugadoraA, jugadoraB, puntajesA, puntajesB)=>{
// //     let resultado="";
// //     let newArray=[];
// //     let countA=0;
// //     let countB=0;

// //     for(let i=0; i<puntajesA.length; i++){
// //         if(puntajesA[i]>puntajesB[i]){
// //             resultado=jugadoraA;
// //         } else if(puntajesA[i]<puntajesB[i]){
// //             resultado=jugadoraB;
// //         } else{
// //             resultado="Empate";
// //         }
// //         newArray.push(resultado);
// //     }

// //     for(let j=0; j<newArray.length; j++){
// //         switch(newArray[j]){
// //             case jugadoraA: 
// //                 countA++;
// //                 break;

// //             case jugadoraB:
// //                 countB++;    
// //         }
// //     }

// //     if( countA>countB){
// //         return jugadoraA
// //     } else if(countA<countB){
// //         return jugadoraB;
// //     } else{
// //         return "Empate"
// //     }

// // }

// // obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB);

// //--Jugar piedra papel o tijeras---

// // const jugadoraA='Ada';
// // const jugadoraB='Grace';
// // const jugadasA= ['piedra', 'piedra', 'tijera'];
// // const jugadasB= ['papel', 'tijera', 'tijera'];

// // const jugarPiedraPapelTijeras =(jugadoraA, jugadoraB, jugadasA, jugadasB)=>{

// //     let resultado="";
// //     for (let a of jugadasA)
// //     for (let b of jugadasB) 

// //     if( a==="piedra" && b==="papel" || (a==="papel" && b==="tijera" ) || (a==="tijera" && b==="piedra" )){
// //         resultado=jugadoraB

// //     }
// //     else if(b==="piedra" && a==="papel" || (b==="papel" && a==="tijera" ) || (b==="tijera" && a==="piedra" )){
// //         resultado= jugadoraA

// //     }

// //     else{
// //         resultado= "Empate";
// //     }
// //     console.log(resultado)
// //     return resultado

// // };

// // jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB);


