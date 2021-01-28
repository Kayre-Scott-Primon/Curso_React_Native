// componentes baseados em classe

import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import estilo from '../estilo'
import MegaNumero from './MegaNumero'

/*
     Extensao do React.Component => relação de erança, devido ao extends, uamvez que ela extende a componente, ela é considera um
     
     "export default class Mega extends React.Component { " tambem pode ser escrito assim
*/
export default class Mega extends Component {
     
     // aqui pode-se criar estados, constantes, funções

     /*
      estado para classe é necessariamente definido da seguinte forma
        lembrando que 'state' é uma palavra reservada
          deve ser inicializado como sendo um objeto
     */
     state = {
          quantNumero: this.props.quantNumero,
          numeros: []
     }
     /*
          Construtor
               recebe as propriedade, props
               super serve para se referenciar (propriedade), a classe pai
               e pode-se referenciar o state
     */
     constructor(props) {
          super(props)

          /*this.state = {
               quantNumero: props.quantNumero + 100
          }*/

          // ou ainda uma segunda solução para referencia do this
               // -> o bind faz com que sempre que o 'this' for chaamda dentro da função, ele vai apontar para o this que passou como parametro
          //this.alterarQtdNumero = this.alterarQtdNumero.bind(this)
     }

     /*
          ou ainda uma segunda solução para referencia do this
           alterarQtdNumero  = (txt) => {
               this.setState({quantNumero: txt})
           }
     */
     alterarQtdNumero(txt) {
          this.setState({quantNumero: +txt}) // transformando para inteiro
     }

     // função recursiva, chama a si mesmo!
     gerarNumeroNaoContido = nums => {
          const novo = parseInt(Math.random() * 60) + 1
          // includes serve apra ver se ja existe este valor dentro do Array
          return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
     }

     /*   // forma de um codigo mais funcional
     gerarNumeros = () => {
          const numeros = Array(this.state.quantNumero)
          .fill()
          .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
          .sort((a,b) => a - b)    // para ordenar os numeros de forma crescente
          this.setState({numeros: numeros})
     }
     */

          // forma amis simples e mais manual/prosidural de realizar a mesma coisa
     gerarNumeros = () => {
          const { quantNumero } = this.state
          const numeros = []

          for(let i = 0; i < quantNumero; i++){
               const novo = this.gerarNumeroNaoContido(numeros)
               numeros.push(novo)
          }
          numeros.sort((a,b) => a - b)
          this.setState({numeros: numeros})
     }

     exibirNum = () => {
          const nums = this.state.numeros
          return nums.map(num => {
               return <MegaNumero key={num} num={num}/>
          })
     }

     // função para quando o componente precisa ser renderizado na tela
     render() {
          return (
               //JSX
               <>
                    <Text style={estilo.fonteG}> 
                         Gerador de Mega-Sena 
                    </Text>
                    <TextInput
                         keyboardType={'numeric'} // configurações do teclado ao clicado
                         style={{borderBottomWidth: 1}}
                         placeholder='Quantidade de numeros'
                         value={this.state.quantNumero}
                         onChangeText={(txt) => this.alterarQtdNumero(txt) /* ou ainda uma segunda solução para referencia do this */}
                    />
                    <Button 
                         title='Gerar'
                         onPress={this.gerarNumeros}
                    />
                    <View style={{
                         /* pode ocorrer de que nao caiba todos os itens dentro da tela do dispositivo,
                              seja na vertical ou horizontal
                              sendo assim, basta utilizar o recurso do flexBox chaamdo de flexwrap, 
                                   |-> que se faz responsavel por permitir a quebra de linha caso o espaço nao seja o suficiente
                                        |-> para permitir: 'wrap'
                                        |-> para nao ermitir: 'no-wrap'
                                        |-> para permitir e inverter a ordem: 'wrap-reverse'
                         */
                         flexDirection: 'row',
                         flexWrap: 'wrap',
                         justifyContent: 'center',
                         marginTop: 20
                    }}>
                         {this.exibirNum()}
                    </View>
               </>
          )
     }
}

/*
     para acessar alguma informação que foi passada como propriedade no momento que foi instanciado basta usar
          this.props.NomeDaPropriedade
*/