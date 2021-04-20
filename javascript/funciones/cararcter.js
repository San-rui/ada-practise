const palabra = "lovelace";
const caracter1 = "e";
const caracter2 = "f";


function esElUltimoCaracter (a , b){
    return a.charAt(a.length - 1) == b
}
console.log(esElUltimoCaracter('lovelace', 'e'));
console.log(esElUltimoCaracter('lovelace', 'f'));

