const aprovados = ['Agatha', 'Aldo' , 'Daniel' , 'Raquel']

aprovados.forEach(function(nome,indice){
     console.log(`${indice + 1} - ${nome}`)
})     //ira percorrer a lista e como parametro tera uma função de callback, que reotrnara o indice de alocagem e o item

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) //posso tanto definir a função na passagem do parametro(exemplo de cima) como tambem definir fora e chama-la no parametro(este exemplo)

aprovados.forEach(function(nome,indice, array){
     console.log(`${indice + 1} - ${nome}`)
     console.log(array)  // o proprio array
})  