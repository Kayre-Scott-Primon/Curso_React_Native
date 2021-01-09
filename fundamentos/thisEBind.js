const pessoa = {
     saudacao: 'Bom dia',
     falar() {
          console.log(this.saudacao)    //sem o this ele da erro
     }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito 

const falarDePessoa = pessoa.falar.bind(pessoa)   //bind serve para corrigir o this, quye sempre pegara do objeto que passa
falarDePessoa()