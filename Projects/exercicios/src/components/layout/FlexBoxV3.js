// trabalhando com flexBox

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
     return (
          // a view seria o container
          <View style={style.FlexV3}>
               {/* os quadrados seriam os itens*/}
               <Quadrado cor='#f00' lado={20}/>
               <Quadrado cor='#090' lado={30}/>
               <Quadrado cor='#009' lado={40}/>
               <Quadrado cor='#099' lado={50}/>
               <Quadrado cor='#409' lado={60}/>
          </View>
     )
}

const style = StyleSheet.create({
     FlexV3: {
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly', // lembrando que este fara o alinhamento do eixo principal, entao depende o FlexDirection
          alignItems: 'baseline',
          height: 350,
          width: '100%',
          backgroundColor: '#555'
     }
})

/*
     Axis, com a propriedade flexDirection se faz capaz de alterar qual dos eixos será o principal
          |-> row, troca o maisAxis para que seja a linha/eixo horizontal
          |-> column, faz com que o MainAxis seja o eixo vertical/coluna
          |-> row-reverse, troca o maisAxis para que seja a linha/eixo horizontal porem com o inicio do eixo sendo o oposto/direto, ou seja, inverte os elementos
          |-> column-reverse, faz com que o MainAxis seja o eixo vertical/coluna porem com a inversao do ponto inicial do eixo, sendo para este, a parte inferior, sendo assim, invertendo os elementos

     a propriedade do alignItens de baseline, reponsavel pelo eixo secundario, faz o alinhamento em realção a base do componente

*/