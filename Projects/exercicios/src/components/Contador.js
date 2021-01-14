import React, { useState } from 'react'
import { Text, Button} from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
     /*   
          desse modo, ao inves de utilizar o props, 
          voce pode utilizar o recurso de destruction para pegar as propriedades e 
          setar um valor caos nao receba esses valores quando instanciado 
     */

     /*
          em um primeiro momento, sem haver a importação de uma ferramenta para monitoramento do estado de parametros e valores
          nada ira acontecer, graficamente, com o codigo
     */

     /* 
     let numero = props.inicial

     const inc = () => {
          numero++
          console.warn(numero)
     }
     const dec = () => {
          numero--
          console.warn(numero)
     }
     
     return(
          <>
               <Text style={Estilo.fonteG}>{numero}</Text>
               <Button title='+' onPress={inc}/>
               <Button title='-' onPress={dec}/>
          </>
     )
     */

     /*
          para essa detecção de alterações dos estados das variaveis e constantes, utizar-se-a uma ferramenta noemada de Hooks(ganchos)
          de acorco com a documentação da React.org , hooks são:
          "
          Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. 
          Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.
           (Nós não recomendamos reescrever seus componentes já existentes de um dia para o outro, 
               mas você pode começar a usar Hooks nos novos se você quiser.)
          "
     */

     /* utilizando um destruction, passar-se-a o nome da variavel, 
          e uma função para que se altere o valor da mesma
          dentro dos paranteses, sehue o valor inicial que se deseja que a variavel assuma
     */
     const [numero, setNumero] = useState(inicial)

     const inc = () => {
          setNumero(numero + passo)
     }
     const dec = () => {
          setNumero(numero - passo)
     }
     
     return(
          <>
               <Text style={Estilo.fonteG}>{numero}</Text>
               <Button title='+' onPress={inc}/>
               <Button title='-' onPress={dec}/>
          </>
     )
}