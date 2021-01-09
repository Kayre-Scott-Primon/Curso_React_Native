const alunos = [
     {nome: 'Joao', nota: 7.3},
     {nome: 'Maria', nota: 9.2},
     {nome: 'Pedro', nota: 9.8},
     {nome: 'Ana', nota: 8.7},
]
console.group(alunos)

//imperativo // mais direto, como tem que ser feito
let total1 = 0
for (let i=0; i< alunos.length; i++){
     total1 += alunos[i].nota
}
console.log( total1 / alunos.length)

//declarativa  //mais detalhadamente, passo a passo, o que tem ser feito    //melhor para reuso
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
const media = total2 / alunos.length
console.log(media)

// select codigo, nome from clientes where ativo = 1