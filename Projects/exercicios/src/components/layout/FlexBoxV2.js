// trabalhando com flexBox

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
     return (
          // a view seria o container
          <View style={style.FlexV2}>
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
     FlexV2: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#555'
     }
})

/*
    crossAxis, eixo cruzado
    alignItens: alinha os itens dentro de um container em relação ao eixo cruzado
          |-> flex-start => alinha em relação ao inicio, caso nao tenha uma tamanho pre definido/fixo, ele ira sumir
          |-> flex-end => alinha em relação ao final, caso nao tenha uma tamanho pre definido/fixo, ele ira sumir
          |-> center => alinha em relação ao centro, caso nao tenha uma tamanho pre definido/fixo, ele ira sumir
          |-> stretch => estica os elementos para ocupar todo o espaço, quando o elemento nao tem um tamanho fixo
          |-> flex-start => alinha em relação ao inicio
*/