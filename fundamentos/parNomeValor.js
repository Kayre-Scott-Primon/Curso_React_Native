 // par nome/valor

 const saudacao = 'Ola'  //contexto lexico 1, onde se definiu fisicamente no codigo

 function exec(){
      const saudacao = 'falaa' // contexto lexico 2, pois esta dentro da funcao
      return saudacao
 }

 //objetos dao grupos aninhados de pares nome/valor
 const cliente = {
      nome: 'Pedro',
      idade: 32,
      peso: 90,
      endereco:{
           logradouro: 'rua muito legal',
           numero: 123,
           bairro: 'maneiro'
      }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)