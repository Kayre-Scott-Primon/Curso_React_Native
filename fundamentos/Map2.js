const carrinho = [
     '{ "nome" : "Borracha", "preco" : 3.45 }',
     '{ "nome" : "caderno", "preco" : 13.90 }',
     '{ "nome" : "Kit de Lapis", "preco" : 41.22 }',
     '{ "nome" : "caneta", "preco" : 7.50 }'
]
console.log(carrinho)

const paraObejto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObejto).map(apenasPreco)
console.log(resultado)