//uma forma de percorrer o array selecionando apenas o que deseja, nao havendo necessidade de retornar tudo

const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true},
     { nome: 'iPad Pro', preco: 4199, fragil: true},
     { nome: 'Copo de vidro', preco: 12.49, fragil: true},
     { nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
     return p.preco > 2500
}))  //passa como parametro uma função que recebe o elemento para que seja feita o que se deseja, por exemplo a condicional, retornando um novo array com o resultado do condicional

console.log(produtos.filter(function(p){
     return p.preco > 2500 && p.fragil == true
}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)

