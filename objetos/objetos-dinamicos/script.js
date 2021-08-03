var propiedadNombre = {
    nombre: "Sandra"
};
var propiedadEdad = {
    edad: 38
};
var persona = {
    nombre: propiedadNombre.nombre,
    edad: propiedadEdad.edad
};
console.log(persona);
//--------EJERCICIO 2--------
console.log(persona['nombre'], persona['edad']);
var producto = {
    id: "ADA-020",
    titulo: "Gubergren sed est amet voluptua",
    precio: 123.75,
    imagen: "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condicion: "nuevo",
    envioGratis: true,
    ubicacion: "Capital Federal"
};
console.log(Object.keys(producto));
//--------EJERCICIO 4--------
var obtenerPropiedadesYValores = function (producto) {
    var salida = "";
    for (var _i = 0, _a = Object.keys(producto); _i < _a.length; _i++) {
        var prop = _a[_i];
        salida += "producto[" + prop + "] -> " + producto[prop] + "\n";
    }
    return salida;
};
var resp = obtenerPropiedadesYValores(producto);
console.log(resp);
var perfilSinEmail = {
    nombreDeCuenta: "ada_lovelace",
    contrasenia: "1234567890!"
};
var perfilConEmail = {
    nombreDeCuenta: "ellie_arroway",
    contrasenia: "vegaeterna",
    email: "ellie@argos.org"
};
var tieneEmail = function (perfil) {
    var respuesta = "";
    if (perfil.hasOwnProperty('email')) {
        respuesta = 'El usuario tiene la propiedad email';
    }
    else {
        respuesta = 'El usuario no tiene la propiedad email';
    }
    return respuesta;
};
tieneEmail(perfilSinEmail);
tieneEmail(perfilConEmail);
console.log(tieneEmail(perfilSinEmail));
console.log(tieneEmail(perfilConEmail));
//--------EJERCICIO 6--------
var perfil1 = {
    nombreDeCuenta: "ada_lovelace",
    contrasenia: "1234567890!"
};
var tienePropiedad = function (perfil, propiedad) {
    return perfil.hasOwnProperty(propiedad);
};
console.log(tienePropiedad(perfil1, "email"));
