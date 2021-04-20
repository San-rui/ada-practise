function esAnioNuevo(fecha){
    return fecha.includes("01/01")
}
console.log(esAnioNuevo('03/05/2015'))
console.log(esAnioNuevo('22/01/1987'))
console.log(esAnioNuevo('01/01/2020'))