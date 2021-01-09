// concatenar

const filhas = ['Ualeska', 'Subalena']
const filhos = ['Uoxiton', 'Ulesclei']
const todos = filhas.concat(filhos)
console.log(filhos, filhas, todos)

const todos2 = filhas.concat(filhos, 'Fulano')    //add algum parametro, so adicionar a frente seuigdo de virgula 
console.log(filhos, filhas, todos2)

console.log([].concat([1,2] , [3,4] , 5 , [[6,7]]))