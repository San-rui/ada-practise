//-----Números más diez-----

// const numeros = [1, 2, 3, 4, 5];

// const numerosMasDiez=(numeros)=>{
//     return numeros.map(current => current+10)
// };

// numerosMasDiez(numeros);

//------Dobles-------
// const numeros = [3, 7, 13, 99];

// const dobles=(numeros)=>{
//     return numeros.map(current => current*2)
// };

// dobles(numeros);

//------Gritar todas-------
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// const gritarTodas=(frases)=>{
//     return frases.map(current => `¡${current}!`)
// };

// gritarTodas(frases);

//------Gritar todas-------
// const librosJS = ['JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming','JavaScript: The Good Parts','Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries','Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','JavaScript: The Definitive Guide','You Don’t Know JS','JavaScript Allongé: The Six Edition'];

// const enlistar=(libros)=>{
//     return libros.map(current => `<li>${current}</li>`)
// };

// enlistar(libros);

//------Longitudes-------

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// const longitudes=(frases)=>{
//     console.log(frases.map(current => current.length))
//     return frases.map(current => current.length);

    
// };

// longitudes(frases);

//------Posiciones------

// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

// const posiciones=(playlist)=>{
//     for(let i=0; i<playlist.length; i++){
//     return playlist.map(current => `${i++} - ${current}`);
//     }
// };

// posiciones(playlist);

// //----------Precios finales------
// const costos = [ 12.5, 56, 98, 45.75 ];

// const preciosFinales=(costos)=>{
    
//     return costos.map(current => (current*1.5)*1.21);

// };

// preciosFinales(costos);

//---------Corresponder----------

// const productos = ['celular', 'notebook', 'monitor' ];
// const costos = [12.5, 56, 98];

// const corresponder=(costos, productos)=>{

//     for(let j=0; j<costos.length; j++)
//     for(let i=0; i<productos.length; i++){
//     return productos.map(current => `${current} ${(costos[j++]*1.5)*1.21}`)
//     }
// };

// corresponder(costos, productos);

//---------Los más caros-------------
// const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];

// const losMasCaros =(costos)=>{
//     console.log(costos.filter(element => element > 50))
//     return costos.filter(element => element > 50)
// };

// losMasCaros(costos);

//-------Pares e impares-------
// const numeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

// const separandoPares=(numeros)=>{
//     console.log(numeros.filter(element => element%2===0))
//     return numeros.filter(element => element%2===0)
// };

// separandoPares(numeros);

// const separandoImpares=(numeros)=>{
//     console.log(numeros.filter(element => element%2!==0))
//     return numeros.filter(element => element%2!==0)
// };

// separandoImpares(numeros);

//---------Sólo strings--------
// const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.'];

// const soloStrings=(mix)=>{
//     let string='string'
//     return mix.filter(element => typeof element === string)
// };

// soloStrings(mix);

//--------Playlist sin escuchar------
const playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']


const playlistSinEscuchar=(playlist, playlistEscuchada)=>{
    
    for(let item of playlistEscuchada)
    for(let j=0; j<playlist.length; j++){
        console.log(playlist.filter(element =>element!==item))
    }



}

playlistSinEscuchar(playlist, playlistEscuchada);
