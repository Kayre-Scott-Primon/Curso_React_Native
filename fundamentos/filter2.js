// criando o proprio filter

//uma forma de percorrer o array selecionando apenas o que deseja, nao havendo necessidade de retornar tudo

Array.prototype.filter2 = function(callback) {
     const newArray = []
     for(let i=0; i<this.length; i++){
          if(callback(this[i], i, this)) {
               newArray.push(this[i])
          }
     }
     return newArray
}

const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true},
     { nome: 'iPad Pro', preco: 4199, fragil: true},
     { nome: 'Copo de vidro', preco: 12.49, fragil: true},
     { nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter2(function(p){
     return p.preco > 2500
}))  //passa como parametro uma função que recebe o elemento para que seja feita o que se deseja, por exemplo a condicional, retornando um novo array com o resultado do condicional

