function aHackerSpeak(str){
    return str.replace(/i/ig, "1").replace(/e/ig, "3").replace(/a/ig, "4").replace(/s/ig, "5").replace(/o/ig, "0")
}
console.log(aHackerSpeak('javascript'));
console.log(aHackerSpeak('soy una hacker'));
console.log(aHackerSpeak('ADA LOVELACE'));