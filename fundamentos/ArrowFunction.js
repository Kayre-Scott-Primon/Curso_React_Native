let dobro = function (a) {
     return 2 * a
}
console.log(dobro(Math.PI))

dobro = (a) => {
     return 2 * a
}
console.log(dobro(Math.PI))

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
     return 'ola'
}
console.log(ola())

ola = () => 'ola'
console.log(ola())

ola = _ => 'ola'
console.log(ola())

//lembrando que o JS nao obriga passar parametros