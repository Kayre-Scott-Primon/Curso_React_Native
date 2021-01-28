// trabalhando com flexBox

import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props => {
     return (
          // a view seria o container
          <View style={style.FlexV4}>
               <View style={style.V0}>

               </View>
               <View style={style.V1}>

               </View>
               <View style={style.V2}>

               </View>
          </View>
     )
}

const style = StyleSheet.create({
     FlexV4: {
          flexGrow: 1,
          width: 100,
          backgroundColor: '#555'
     },
     V0: {
          backgroundColor: '#088',
          height: 111
     },
     V1: {
          backgroundColor: '#0a0',
          flexGrow: 2
     },
     V2: {
          backgroundColor: '#a0a',
          flexGrow: 3
     }
})

/*
     FlexGrow
      como as duas view estao com o memso valor de grow, elsa possuem o mesmo peso para crescer em relação ao espaço restante da view, sendo assim vao crescer o mesmo tanto
     dentro do container, onde existem varios itens com grow, o que ocorre é:
          soma-se todos os grows e apos isso cada item pegara a quantidade do espaço relativo ao seu numero, como se fosse fração/porcentagem
               |-> mas isso da area que esta sobrando! 
*/