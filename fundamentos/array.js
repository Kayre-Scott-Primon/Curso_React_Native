console.log(typeof Array, typeof new Array, typeof [])

//array pode-se colocar qualquer tipo dentro
// boas praticas dizem que é bom trabalhar com dados homogeneos dentro de um Array, ou seja, todos do mesmo tipo

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']    //criação do array de forma literal, recomendado
console.log(aprovados[0])     //para se acessar um campo do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])     //acessar um campo que nao existe, retorna undefined

aprovados[3] = 'Paulo'    //substituir algum dado
console.log(aprovados[3])

aprovados.push('Abia')   //adicionar ao final um novo valor
console.log(aprovados.length) //retorna o tamanho

aprovados[9] = 'Rafael'  //ira dar certo, porem os dados que nao foram definidos sera dado como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[7] === null)

console.log(aprovados)

aprovados.sort()    // faz a organização do array, essa alteração se da no proprio array e nao em outro novo
console.log(aprovados)

delete aprovados[1] //usado apara exluir o valor, apenas o valor, o campo continua existindo, sendo assim é poreenchido com undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)  // serve para add, exlcuir e adicionar e excluir ao mesmo tempo. O primeiro parametro é o indice que deseja começar a excluir e o segundo qauntos deseja excluir
console.log(aprovados)
aprovados.splice(1, 2, 'Joaquim' , 'José')   // ira,a partir do indice 1, excluir 2 indices sequentes, e add os novos valor passados em relação ao indice passado
console.log(aprovados) 
aprovados.splice(1, 1, 'Maria' , 'Marcia')   // ira,a partir do indice 1, excluir 1 indices sequentes, e add os novos valor passados em relação ao indice passado, mantendo o que ja existe no aray
console.log(aprovados) 