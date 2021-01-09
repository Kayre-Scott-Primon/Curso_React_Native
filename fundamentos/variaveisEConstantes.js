var a = 3 // atribuição a variavel
let b = 4 // forma mais modernas de criar variavel

var a = 30
//let b = 40 
/*
dará erro, porem somente em 'b' uma vez que 
let nao pode ser redeclarado, diferentemente
do var 
*/

console.log(a,b)

a = 300
b = 400 // somente assim pode alterar o valor de let

console.log(a,b)

const c = 5
//c = 50 // gerará erro, pois contante nao pode ser atribuido valor

console.log(c)
