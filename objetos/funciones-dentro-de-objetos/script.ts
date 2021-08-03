//---------EJERCICIO 1: HOLA MUNDO------------
type HolaMundo ={
    mostrarMensaje:() => string,
    obtenerMensaje:() => string,
};

let holaMundo : HolaMundo={
    mostrarMensaje: function myMethod1(){
        return `¡Hola mundo!`
    },
    obtenerMensaje: function myMethod2(){
        return `¡Alo mundo!`
    },
};

console.log(holaMundo.mostrarMensaje());
console.log(holaMundo.obtenerMensaje());

//---------EJERCICIO 2: Películas-------
type Películas ={
    titulo: string,
    anio: number,
    director: string,
    mostrarInfo:() => string,
};

let pelicula: Películas = {
    titulo: "The Dark Knight",
    anio: 2008,
    director: "Christopher Nolan",
    mostrarInfo: function method1 (){
        return `Película: ${pelicula.titulo} - Año: ${pelicula.anio}`
    }
};

console.log(pelicula.mostrarInfo())

//---------EJERCICIO 3: Playlist-------
type Playlist = {
    nombre: string,
    creadaPor: string,
    seguidores: number,
    canciones: string[],
    agregarCancion:(NuevaCancion: string) => any,
};

let playlist: Playlist = {
    nombre: "Rupaul Lipsyncs",
    creadaPor: "Ada",
    seguidores: 8743,
    canciones: [],
    agregarCancion: function method3 (NuevaCancion){
        this.canciones.push(NuevaCancion)
    }
};

console.log(playlist.agregarCancion("NuevaCancion"));
console.log(playlist);

//---------EJERCICIO4 : PERFIL-------
type Perfil2 = {
    nombre: string,
    apellido: string,
    edad: number,
    obtenerNombreCompleto: () => string,
};

let perfil2: Perfil2 = {
    nombre: "Hedy",
    apellido: "Lamarr",
    edad: 30,
    obtenerNombreCompleto: function method3 (){
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(perfil2.obtenerNombreCompleto());

//-------------Ejercicio 5: Perfil II----------
type Perfil3 = {
    nombreCompleto: {
        nombre: string,
        apellido: string,
    },
    edad: number,
    obtenerNombreCompleto: () => string,
};

let perfil3: Perfil3 = {
    nombreCompleto: {
        nombre: "Hedy",
        apellido: "Lamarr",
    },
    edad: 30,
    obtenerNombreCompleto: function method3 (){
            return `${perfil3.nombreCompleto.nombre} ${perfil3.nombreCompleto.apellido}`
        }
};
console.log(perfil3.obtenerNombreCompleto());

//-------------Ejercicio 6: Carrito-------------
type Article = {
    id: number,
    titulo: string,
    precio: number,
    envioIncluido: boolean
};

type Carrito = {
    cuenta: {
        id: number,
        nombre: string,
    },
    productos: Article[],
    agregarAlCarrito: any,
    obtenerTotal: ()=> number,
};

let mouse: Article = {
    id: 0,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: false
};

let carrito : Carrito = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace",
    },
    productos: [],
    agregarAlCarrito: function method3 (NuevoItem){
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4 (){
        let total=0;
        for( let propiedad of this.productos){   
            total+= propiedad.precio
        }
        
        return total
    }
};

console.log(carrito.agregarAlCarrito(mouse));
console.log(carrito);
console.log(carrito.obtenerTotal());

//-------------Ejercicio 7: Carrito II-------------

let carritoII = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace",
    },
    productos: [],
    agregarAlCarrito: function method3 (NuevoItem){
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4 (){
        let total=0;
        for( let propiedad of this.productos){  
            if(propiedad.envioIncluido){
                total+= propiedad.precio
            }else{
                total+= propiedad.precio + 120
            }
            
        }
        
        return total*1.21
    }
};

//-------------Ejercicio 8: Carrito III-------------
let carritoIII = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace",
    },
    productos: [],
    agregarAlCarrito: function method3 (NuevoItem){
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4 (){
        let total=0;
        for( let propiedad of this.productos){  
            if(propiedad.envioIncluido){
                total+= propiedad.precio
            }else{
                total+= propiedad.precio + 120
            }
            
        }
        
        return total*1.21
    },
    detalle: function method5 (){
        let newItem=""
        let totalIva=0;
        for( let propiedad of this.productos){
            if(propiedad.envioIncluido){
                newItem+= `${propiedad.titulo} - ${propiedad.precio}`;
                totalIva+=propiedad.precio*1.21;
            }else{
                newItem+= `${propiedad.titulo} - ${propiedad.precio+120}`;
                totalIva+=(propiedad.precio+120)*1.21;
            }
        }

        return `Listado de productos:\n${newItem} - $2620\nTotal con IVA: $${totalIva}`

    }
};
console.log(carritoIII.agregarAlCarrito(mouse));
console.log(carritoIII);
console.log(carritoIII.detalle());
