import React from 'react'
import {
     Button,
     Text,
     View,
     StyleSheet
} from 'react-native'

export default props => {

     return(
          <>
               <View style={style.viewBotoes}>
                    <Button
                         title="+" onPress={props.inc}
                    />
                    <Button
                         title="-" onPress={props.dec}
                    />
               </View>
          </>

     )
}

const style = StyleSheet.create({
     viewBotoes: {
          flexDirection: 'row',
          padding: 50
     }
})