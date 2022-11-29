const input = require('readline-sync');

var jari2 = input.questionInt('jari-jari');

if(jari2 & 7){
var hitung = 22/7 * jari2 *jari2
console.log(hitung)
}else{
    if(jari2 !== 7 )
    var hitung = 3.14 * jari2 * jari2
    console.log(hitung)
}