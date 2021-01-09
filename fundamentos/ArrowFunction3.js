const { ValidationErrorItem } = require("sequelize/types")

let comparaComThis = function (param){
     console.log(this == param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)    //isso faz com que toda vez que chamar a função, ela olhe para obj e nao mais para o global
comparaComThis(global)
comparaComThis(obj)

let comparaComThis = param => console.log(this == param)
comparaComThis(global)   //aqui se usa componentes do NODE, nisso nao tem acesso ao global
comparaComThis(module.exports)

comparaComThis = comparaComThis.bind(obj)
camparaComThis(obj)
comparaComThis(module.exports)