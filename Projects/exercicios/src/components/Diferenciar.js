/*
     Para deseja criar uma situação que o cogido execute em carios pontis
     o 'Plataform' ira indicar qual é a platafomra em que o aplicatrivo esta
     podendo fazer alterações para quando se deseja foi outro numero
*/

import React from 'react'
import {
     Text,
     Platform
} from 'react-native'
import estilo from './estilo'

export default props => {
     if(Platform.OS === 'android'){
     return(
          <Text style={estilo.fonteG}>
               Android
          </Text>
     )}
     else if(Platform.OS === 'ios'){
          return(
               <Text style={estilo.fonteG}>
                    Android
               </Text>
     )}else{
          return (<Text style={estilo.fonteG}>
               IOS
          </Text>)
     }
}