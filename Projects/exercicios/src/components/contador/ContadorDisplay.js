import React from 'react';
import estilo from '../estilo'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
     return(
          <>
               <View style={style.Display}>
                    <Text style={[estilo.fonteG, style.DisplayText]}>
                         {props.num}
                    </Text>
               </View>
          </>
     )
}

const style = StyleSheet.create({
     Display: {
          backgroundColor: '#000',
          padding: 20,
          width: 300
     },
     DisplayText: {
          color: '#fff'
     }
})