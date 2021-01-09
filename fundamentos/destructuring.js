// novo recurso do ES6

const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
          logradouro: 'Rua ABC',
          numero: 1000
     }
}

//desestruturação
const {nome,idade} = pessoa   // tire de dentro do objeto as seguintes entidades: nome e idade
console.log(nome,idade)

const {nome: n, idade: i} = pessoa //para criar variaveis com outros nomes
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa    //no caso de bemHumorada, foi se definido um valor padrao, ou seja, caso seja undefined, ele ira atribuir undefined
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa   //para acessar posicoes aninhadas 
console.log(logradouro,numero,cep)

