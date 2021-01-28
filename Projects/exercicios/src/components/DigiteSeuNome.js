// importaçao de texto pelo usuario
// campo de texto

import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import estilo from './estilo'

export default props => {
     const [ nome, setNome ] = useState('Teste')
     return (
          <View>
               <Text>{nome}</Text>
               <TextInput
                    // é considera um componente nao controlado, a nao ser que utilize a propriedade onChangeText, que fara com que fique dinamico o campo de escrita
                    placeholder='Digite seu nome:'     // escrita quando estiver sem nenhuma entrada de dados
                    value={nome}   // o valor que sempre ira assumir, sendo fixo nao consegue-se altera-lo
                    onChangeText={nome => setNome(nome)}   // recebe o valor atual, dentro do campo, e altera o estado
               />
          </View>
     )
}