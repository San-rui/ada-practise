var sobreMi = {
    nombre: "sandra",
    apellido: "Ruidiaz",
    edad: 38
};
var perfil = {
    nombre: "Olivia",
    apellido: "Marsu",
    edad: 21
};
var presentacion = function (perfil) {
    return "Hola, mi nombre es " + perfil.nombre + " " + perfil.apellido + " y tengo " + perfil.edad + " a\u00F1os";
};
console.log(presentacion(perfil));
var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV"
};
var cancion = function (song) {
    return { titulo: song.title,
        banda: song.bandName,
        duracion: song.duration / 1000 };
};
console.log(cancion(song));
var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true
};
var telefono = datos.telefono, edad = datos.edad;
telefono = "098765432";
edad = "29";
console.log(telefono);
var modificarEdad = function (datos) {
    return datos.edad = "33";
};
//-------------Ejercicio 7 --------
var agregarLenguajeFavorito = function (datos) {
    if (datos.programa) {
        datos.lenguajeFavorito = 'JavaScript';
    }
};
agregarLenguajeFavorito(datos);
console.log(datos);
//-------------Ejercicio 8 --------
var agregarLenguajesFavoritos = function (datos) {
    if (datos.programa) {
        datos.lenguajesFavoritos = ['JavaScript', 'Ruby'];
    }
};
agregarLenguajesFavoritos(datos);
console.log(datos);
var disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};
var infoDelDisco = function (disco) {
    var banda = disco.banda;
    var nombre = banda.nombre;
    return "El disco " + disco.nombre + " de la banda " + nombre + " se lanz\u00F3 en el a\u00F1o " + disco.anioLanzamiento;
};
infoDelDisco(disco);
console.log(infoDelDisco(disco));
var perfilLinkedin = {
    id: 123456789,
    nombre: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    habilidades: ["HTML", "CSS", "SASS"]
};
var agregarHabilidad = function (perfilLinkedin, habilidad) {
    perfilLinkedin.habilidades.push(habilidad);
};
agregarHabilidad(perfilLinkedin, 'Javascript');
console.log(perfilLinkedin);
var playlistDeEjemplo = {
    nombre: "Lista de Nirvana",
    privada: true,
    canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
};
var infoDeLaPlaylist = function (playlistDeEjemplo) {
    var privadaList;
    if (playlistDeEjemplo.privada) {
        privadaList = "Si";
    }
    else {
        privadaList = "No";
    }
    return playlistDeEjemplo.nombre + "\n    Privada: " + privadaList + "\n    Canciones: " + playlistDeEjemplo.canciones[0] + "\n    " + playlistDeEjemplo.canciones[1] + "\n    " + playlistDeEjemplo.canciones[2];
};
infoDeLaPlaylist(playlistDeEjemplo);
console.log(infoDeLaPlaylist(playlistDeEjemplo));
var ganadoras = [
    {
        nombre: "Bebe Zahara Benet",
        temporada: "1",
        foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg"
    },
    {
        nombre: "Tyra Sanchez",
        temporada: "2",
        foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg"
    },
    {
        nombre: "Raja",
        temporada: "3",
        foto: "http://www.nokeynoshade.party/images/raja.jpg"
    },
    {
        nombre: "Sharon Needles",
        temporada: "4",
        foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg"
    },
    {
        nombre: "Jinkx Monsoon",
        temporada: "5",
        foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg"
    },
    {
        nombre: "Bianca Del Rio",
        temporada: "6",
        foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg"
    },
];
var informacionGanadoras = function (ganadoras) {
    var output = "";
    for (var _i = 0, ganadoras_1 = ganadoras; _i < ganadoras_1.length; _i++) {
        var ganadora = ganadoras_1[_i];
        output += ganadora.nombre + " gano la temporada " + ganadora.temporada + "\n";
    }
    return output;
};
informacionGanadoras(ganadoras);
console.log(informacionGanadoras(ganadoras));
