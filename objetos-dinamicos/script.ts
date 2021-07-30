//--------EJERCICIO 1--------
type Propiedades ={
    nombre?: string,
    edad?: number,
};

let propiedadNombre: Propiedades={
    nombre: "Sandra",
};

let propiedadEdad: Propiedades={
    edad: 38,
}

let persona: Propiedades={
    nombre: propiedadNombre.nombre,
    edad: propiedadEdad.edad,
}

console.log(persona);

//--------EJERCICIO 2--------

console.log(persona['nombre'], persona['edad']);

type Productos = {
    id: string,
    titulo: string,
    precio: number,
    imagen: string,
    condicion: string,
    envioGratis: boolean,
    ubicacion: string,
};

let producto: Productos = {
    id: "ADA-020",
    titulo: "Gubergren sed est amet voluptua",
    precio: 123.75,
    imagen: "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condicion: "nuevo",
    envioGratis: true,
    ubicacion: "Capital Federal",
  };

console.log(Object.keys(producto));

//--------EJERCICIO 4--------

const obtenerPropiedadesYValores=(producto: Productos)=>{
    let salida="";
    
    for( const prop of Object.keys(producto)){
        salida +=`producto[${prop}] -> ${producto[prop]}\n`
    }
    return salida

};

let resp= obtenerPropiedadesYValores(producto);
console.log(resp);