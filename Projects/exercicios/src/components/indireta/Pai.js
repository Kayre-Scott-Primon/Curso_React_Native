// comunicação indireta, que se resume em passar um parametro do filho para o pai, o caminho oposoto do usual
// componente Pai

/*
     a forma de fazer com que um elemento abaixo na cadeia de herança se comunique com um acima,
     ou seja, que um Filho converse com um Pai, tem como solução a passagem de uma função na Pai como propriedade para o Filho
     sendo assim, o filho pode chamar essa função, porem a função pode receber alguns parametros, sendo assim, quando o filho
     istancia a função, precisa-se realizar a passagem de parametro, passando assim o que se deseja compartilhar 
*/

import React, { useState } from 'react';
import { Text } from 'react-native'
import estilo from '../estilo';
import Filho from './Filho'

export default props => {
     const [texto, setTexto] = useState('')
     const [num, setNum] = useState(0)

     function exibirValor(numero,texto){
          setNum(numero)
          setTexto(texto)
     }

     return (
          <>
               <Text style={estilo.fonteG}>{texto}: {num}</Text>
               <Filho 
                    /* aqui segue a função que servira de interface de comunicação */
                    funcao={exibirValor} 
                    min={1} 
                    max={60}
                    /> 
          </>
     )
}