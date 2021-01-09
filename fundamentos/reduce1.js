//função de array, onde tem como parametro uma callback
//esta call back possui como primiero parametro um acumulador e como segundo o valor atual
//dentro da callback pode-se manipuar da maneira que se queira os valores acumulados e o atual, sendo como se fosse um for, que passara por todos os elementos

const alunos = [
     {nome: 'Joao', nota: 7.3, bolsista: false},
     {nome: 'Maria', nota: 9.2 , bolsista: true},
     {nome: 'Pedro', nota: 9.8, bolsista: false},
     {nome: 'Ana', nota: 8.7, bolsista: true},
]
console.group(alunos)

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
     console.log(acumulador,atual)
     return acumulador + atual
}, 10) //para passar um valor inicial 
console.log(resultado)