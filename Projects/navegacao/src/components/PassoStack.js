import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => {
     return(
          <View style={{flex: 1}}>
               <View style={{flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
                    {props.avancar 
                         ?    <Button
                                   title= 'Avançar'
                                   onPress={() => {
                                        props.navigation.navigate(
                                             props.avancar, 
                                             /*{ 
                                                  numero: parseInt(Math.random() * 100)
                                             }*/
                                             props.avancarParams
                                             )
                                   }}
                              />
                         :    false
                    }
                    {props.voltar 
                         ?    <Button
                                   title= 'Voltar'
                                   onPress={() => {
                                        props.navigation.goBack()
                                   }}
                              />
                         :    false
                    }
               </View>
               <View style={{ flex:1 }}>
                    {props.children}
               </View>
          </View>
     )
}