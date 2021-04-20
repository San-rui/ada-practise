function burlarse(str){
    return str.replace(/[a,e,o,u]/g,"i")
}
console.log(burlarse('programar es dificil'))