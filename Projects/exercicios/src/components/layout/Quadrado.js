// começando a trablhar com estilização

import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
     const lado = props.lado || 55
     return (
          <View style={{
               height: lado,
               width: lado,
               backgroundColor: props.cor || '#000'
          }}>

          </View>
     )
}

const style = StyleSheet.create({
     
})