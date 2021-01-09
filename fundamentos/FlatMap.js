const escola = [{
     nome: 'Turma m1',
     alunos: [{
          nome: 'Gustavo',
          nota: 8.1
     },{
          nome: 'Ana',
          nota: 9.3
     }]
}, {
     nome: 'Turma m2',
     alunos: [{
          nome: 'Rafel',
          nota: 8.9
     },{
          nome: 'Roberto',
          nota: 7.6
     }]
}]

const getNotaDoAluno = a => a.nota
const getNotaDaTurma = t => t.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

// de forma indireta
console.log([].concat([[ 8.1, 9.3 ],[ 8.9, 7.6 ]]))

//flatMap
Array.prototype.flatMap = function(callback) {
     return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)
