function rand({min = 0, max = 1000}) {  // recebe um objeto e ja extrai o que deseja
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

const obj = { max:50, min: 40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))    // usa um recuso da predefinição dos valores
//console.log(rand())    // da problema, pois nao ha nada para desestruturar

