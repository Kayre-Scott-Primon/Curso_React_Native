import React from 'react';
import estilo from '../estilo';
import { Text } from 'react-native'

export default props => {

     return (
          <>
               <Text style={estilo.fonteG}>
                    {props.nome} {props.sobrenome}
               </Text>
          </>
     )
}