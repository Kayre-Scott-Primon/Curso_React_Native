// comunicação direta
// componente filho

import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
     return(
          <>
               <Text style={Estilo.fonteG}>{props.a}</Text>
               <Text style={Estilo.fonteG}>{props.b}</Text>
          </>
     )
}