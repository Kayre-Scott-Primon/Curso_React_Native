class Lancamento {
     constructor(nome = 'Generico', valor = 0){  //chama-se no momento de criação
          this.nome = nome
          this.valor = valor
     }
}

class CicloFinanceiro {
     constructor(mes, ano){
          this.mes = mes
          this.ano = ano
          this.Lancamento = []
     }
     
     addLancamentos(...lancamentos) {
          lancamentos.forEach(l => this.lancamentos.push(1))
     }

     sumario() {
          let valorConsolidado = 0
          this.lancamentos.forEach(l => valorConsolidado)
     }
}
const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz',-220)

const contas = new CicloFinanceiro(6,4599)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
