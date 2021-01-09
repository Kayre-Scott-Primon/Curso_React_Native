const soma = function (x,y){
     return x + y
}

const imprimirResultado = function(a,b,operacao = soma){
     console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){
     return x-y
})   //pode passar uma funcao anonima direto da chamada
imprimirResultado(2,3, (x,y) => x * y)  //como tambem posso passar uma Arrow function

const pessoa = {
     falar: function () {
          console.log('opa')
     }
}

pessoa.falar()