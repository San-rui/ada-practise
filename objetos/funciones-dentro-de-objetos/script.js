var holaMundo = {
    mostrarMensaje: function myMethod1() {
        return "\u00A1Hola mundo!";
    },
    obtenerMensaje: function myMethod2() {
        return "\u00A1Alo mundo!";
    }
};
console.log(holaMundo.mostrarMensaje());
console.log(holaMundo.obtenerMensaje());
var pelicula = {
    titulo: "The Dark Knight",
    anio: 2008,
    director: "Christopher Nolan",
    mostrarInfo: function method1() {
        return "Pel\u00EDcula: " + pelicula.titulo + " - A\u00F1o: " + pelicula.anio;
    }
};
console.log(pelicula.mostrarInfo());
var playlist = {
    nombre: "Rupaul Lipsyncs",
    creadaPor: "Ada",
    seguidores: 8743,
    canciones: [],
    agregarCancion: function method3(NuevaCancion) {
        this.canciones.push(NuevaCancion);
    }
};
console.log(playlist.agregarCancion("NuevaCancion"));
console.log(playlist);
var perfil2 = {
    nombre: "Hedy",
    apellido: "Lamarr",
    edad: 30,
    obtenerNombreCompleto: function method3() {
        return this.nombre + " " + this.apellido;
    }
};
console.log(perfil2.obtenerNombreCompleto());
var perfil3 = {
    nombreCompleto: {
        nombre: "Hedy",
        apellido: "Lamarr"
    },
    edad: 30,
    obtenerNombreCompleto: function method3() {
        return perfil3.nombreCompleto.nombre + " " + perfil3.nombreCompleto.apellido;
    }
};
console.log(perfil3.obtenerNombreCompleto());
var mouse = {
    id: 0,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: false
};
var carrito = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace"
    },
    productos: [],
    agregarAlCarrito: function method3(NuevoItem) {
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4() {
        var total = 0;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var propiedad = _a[_i];
            total += propiedad.precio;
        }
        return total;
    }
};
console.log(carrito.agregarAlCarrito(mouse));
console.log(carrito);
console.log(carrito.obtenerTotal());
//-------------Ejercicio 7: Carrito II-------------
var carritoII = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace"
    },
    productos: [],
    agregarAlCarrito: function method3(NuevoItem) {
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4() {
        var total = 0;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var propiedad = _a[_i];
            if (propiedad.envioIncluido) {
                total += propiedad.precio;
            }
            else {
                total += propiedad.precio + 120;
            }
        }
        return total * 1.21;
    }
};
//-------------Ejercicio 8: Carrito III-------------
var carritoIII = {
    cuenta: {
        id: 123,
        nombre: "Ada Lovelace"
    },
    productos: [],
    agregarAlCarrito: function method3(NuevoItem) {
        this.productos.push(NuevoItem);
    },
    obtenerTotal: function method4() {
        var total = 0;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var propiedad = _a[_i];
            if (propiedad.envioIncluido) {
                total += propiedad.precio;
            }
            else {
                total += propiedad.precio + 120;
            }
        }
        return total * 1.21;
    },
    detalle: function method5() {
        var newItem = "";
        var totalIva = 0;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var propiedad = _a[_i];
            if (propiedad.envioIncluido) {
                newItem += propiedad.titulo + " - " + propiedad.precio;
                totalIva += propiedad.precio * 1.21;
            }
            else {
                newItem += propiedad.titulo + " - " + (propiedad.precio + 120);
                totalIva += (propiedad.precio + 120) * 1.21;
            }
        }
        return "Listado de productos:\n" + newItem + " - $2620\nTotal con IVA: $" + totalIva;
    }
};
console.log(carritoIII.agregarAlCarrito(mouse));
console.log(carritoIII);
console.log(carritoIII.detalle());
