const pilotos = ['Vettel' , 'Alonso' , 'Raikkonen', 'Massa']
pilotos.pop()  //remove o ultimo elemento do araay
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift()     //remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')   //adiciona um item no começo da lista, contrario do push
console.log(pilotos)

pilotos.splice(2,0,'Botas', 'Massa')    //adicionar a partir do indice passado no primeiro parametro, sem remover nenhum item (segundo pametro), o que quero adicionar: os demais parametros
console.log(pilotos)

pilotos.splice(3 ,1)     //ira remover, a partir do indice passado no primeiro parametro, a quantidade de indices passada no segundo parametro
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array de acordo com o array passado a partir do indice passado no parametro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)    //ira retorna um novo array onde o primiero parametro é onde ira começar (ira incluir esse indice) ate o indice passado no segundo parametro(nao inclui no novo array)
console.log(algunsPilotos2)

