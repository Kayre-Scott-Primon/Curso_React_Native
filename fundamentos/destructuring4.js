function rand([min = 0, max = 1000]){
     if(min>max) [min,max] = [max,min]  // para se inverter a posição das variaveis
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([40,50]))
console.log(rand([500]))
console.log(rand([,10]))
console.log([])
//console.log()     //vai dar erro, pois nao ha o que desestruturar