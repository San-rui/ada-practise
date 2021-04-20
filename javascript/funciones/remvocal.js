function removerVocales(str){
    return str.replace(/[a,e,i,o,u]/g,"")
}
console.log(removerVocales('javescriptiku'))