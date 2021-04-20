function esFraccionMayorAUno(fraccion){
    const numerador = Number(fraccion[0]);
    const denominador = Number (fraccion [2]);
    const resultado = numerador / denominador;
    return resultado > 1
}
console.log(esFraccionMayorAUno('1/2'));
console.log(esFraccionMayorAUno('2/2'));
console.log(esFraccionMayorAUno('4/2'));