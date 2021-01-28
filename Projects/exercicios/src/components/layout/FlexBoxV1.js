// trabalhando com flexBox

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
     return (
          // a view seria o container
          <View style={style.FlexV1}>
               {/* os quadrados seriam os itens*/}
               <Quadrado/>
               <Quadrado cor='#f00'/>
               <Quadrado cor='#090'/>
               <Quadrado cor='#009'/>
               <Quadrado cor='#099'/>
               <Quadrado cor='#409'/>
          </View>
     )
}

const style = StyleSheet.create({
     FlexV1: {
          flex: 1,  // ele ira crscer de acordo com o eixoPrincipal(MainAxis)
          justifyContent: 'space-between',
          backgroundColor: '#555'
     }
})

/*
     'flex: 1' ou 'flexGrow: 1' => fara com que o componente cresça para ocupar todo o espaço
     'jsutifyContent: '...' ' => fara o alinhamento do componente em relaçao ao MainAxis
          |-> center, 
          |-> flex-start, 
          |-> flex-end, 
          |-> space-araound (divide em espaços iguais o que ha dentro do container), 
          |-> 'space-evenly(espaça os itens de forma igual), 
          |-> space-between(espaçamento igual apenas entre os itens)
     
*/