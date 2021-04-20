function ocultarContrasenia(str){
    return str.replace(/[0-9]/ig,"*")
}
console.log(ocultarContrasenia('123456'));
console.log(ocultarContrasenia('111222333'));
