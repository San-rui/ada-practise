type Info = {
    nombre: string,
    apellido: string,
    edad: number,
};

let sobreMi: Info = {
    nombre: "sandra",
    apellido: "Ruidiaz",
    edad: 38
};

let perfil: Info= {
    nombre: "Olivia",
    apellido: "Marsu",
    edad: 21
};

const presentacion =(perfil: Info)=>{
    return `Hola, mi nombre es ${perfil.nombre} ${perfil.apellido} y tengo ${perfil.edad} años`
};

console.log(presentacion(perfil));

type songs={
    title: string,
    bandName: string,
    duration: number,
    album: string,
}

let song: songs = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV"
};

let cancion= (song: songs)=> {
    return {titulo: song.title, 
            banda: song.bandName,
            duracion: song.duration/1000,}
};
console.log(cancion(song));

//-------------Ejercicio 6 --------
type DatosPersonales ={
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    telefono: string,
    edad: string,
    programa: boolean,
    lenguajeFavorito?: string,
    lenguajesFavoritos?: string[],
}

let datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
};

let {telefono, edad}: {telefono: string, edad: string} =datos;
telefono="098765432";
edad="29";

console.log(telefono);



let modificarEdad =(datos: DatosPersonales)=>{
    return datos.edad= "33";        
};


//-------------Ejercicio 7 --------

let agregarLenguajeFavorito =(datos: DatosPersonales)=>{

    if(datos.programa){
        datos.lenguajeFavorito= 'JavaScript';
    }
    
};
agregarLenguajeFavorito (datos);
console.log(datos)

//-------------Ejercicio 8 --------

let agregarLenguajesFavoritos =(datos: DatosPersonales)=>{

    if(datos.programa){
        datos.lenguajesFavoritos= ['JavaScript','Ruby'];
    }
    
};
agregarLenguajesFavoritos(datos);
console.log(datos)

//-------------Ejercicio 9: Disco --------
type Discos={
    id: number,
    nombre: string,
    anioLanzamiento: number,
    cantidadDeTemas: number,
    banda: {
        nombre: string,
        anioFormacion: number
    }
};

let disco: Discos = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};

const infoDelDisco=(disco: Discos)=>{
    const{banda}=disco;
    const {nombre}=banda;

    return `El disco ${disco.nombre} de la banda ${nombre} se lanzó en el año ${disco.anioLanzamiento}`
};

infoDelDisco(disco);
console.log(infoDelDisco(disco));

//-------------10: Habilidades --------
type PerfilesLinkedin={
    id: number,
    nombre: string,
    url: string,
    habilidades: string[], 
}

let perfilLinkedin: PerfilesLinkedin= {
    id: 123456789,
    nombre: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    habilidades: ["HTML", "CSS", "SASS"],
};

const agregarHabilidad=(perfilLinkedin: PerfilesLinkedin, habilidad: string)=>{
    perfilLinkedin.habilidades.push(habilidad);
}
agregarHabilidad(perfilLinkedin, 'Javascript')
console.log(perfilLinkedin);

//-------------Ejercicio 11: Playlist----------
type Playlist = {
    nombre: string,
    privada: boolean,
    canciones: string[],
};

let playlistDeEjemplo: Playlist = {
    nombre: "Lista de Nirvana",
    privada: true,
    canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
};

const infoDeLaPlaylist=(playlistDeEjemplo: Playlist)=>{
    let privadaList;
    if (playlistDeEjemplo.privada){
        privadaList="Si";
    } else{
        privadaList="No";
    } 

    return `${playlistDeEjemplo.nombre}
    Privada: ${privadaList}
    Canciones: ${playlistDeEjemplo.canciones[0]}
    ${playlistDeEjemplo.canciones[1]}
    ${playlistDeEjemplo.canciones[2]}`
};

infoDeLaPlaylist(playlistDeEjemplo);
console.log(infoDeLaPlaylist(playlistDeEjemplo));

//-------------Ejercicio 12: Ganadora----------

type Participante={
        nombre: string,
        temporada: string,
        foto: string,
}

let ganadoras: Participante[] = [
    {
        nombre: "Bebe Zahara Benet",
        temporada: "1",
        foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
    },
    {
        nombre: "Tyra Sanchez",
        temporada: "2",
        foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
    },
    {
        nombre: "Raja",
        temporada: "3",
        foto: "http://www.nokeynoshade.party/images/raja.jpg",
    },
    {
        nombre: "Sharon Needles",
        temporada: "4",
        foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
    },
    {
        nombre: "Jinkx Monsoon",
        temporada: "5",
        foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
    },
    {
        nombre: "Bianca Del Rio",
        temporada: "6",
        foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
    },
];

const informacionGanadoras =(ganadoras: Participante[])=>{
    
    let output: string="";
    
    for(let ganadora of ganadoras ){
        output+=  `${ganadora.nombre} gano la temporada ${ganadora.temporada}\n`
    }
    return output
};

informacionGanadoras (ganadoras);
console.log(informacionGanadoras (ganadoras))
