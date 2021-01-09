// criação do foreach

Array.prototype.forEach2 = function(callback) {
     for(let i=0; i< this.length; i++){
          callback(this[i], i, this)
     }
}

const aprovados = ['Agatha', 'Aldo' , 'Daniel' , 'Raquel']

aprovados.forEach2(function(nome,indice){
     console.log(`${indice + 1} - ${nome}`)
})     //ira percorrer a lista e como parametro tera uma função de callback, que reotrnara o indice de alocagem e o item

