import React from 'react'
import { SafeAreaView } from 'react-native'
import Stack from './Stack'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './Tab'
import Drawer from './Drawer'

export default props => (
     <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
               {/*<Drawer/>*/}
               {<Tab/>}
               {/*<Stack/>*/}
          </NavigationContainer>
     </SafeAreaView>
)