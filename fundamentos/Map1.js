// mapeando um array para formar um novo array de MESMO TAMANHO!

const nums = [1, 2, 3, 4, 5]
console.log(nums)

//o map é um for com proposito

let resultado  = nums.map(function(e) {
     return e * 2
})   //como parametro ira receber a função que ira modificar os elementos do array primario para se tornarem os elementos do araay secundario
console.log(resultado)

const soma10 = e => e + 10

const triplo = e =>  e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)