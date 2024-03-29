import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements';
import { UsersProveider } from './context/UsersContext';

const Stack = createNativeStackNavigator()

const App = props => {
  return (
     <UsersProveider>
          <NavigationContainer>
               <Stack.Navigator
                    initialRouteName='UserList'
                    screenOptions={screenOptions}
               >
                    <Stack.Screen
                         name='UserList'
                         component={UserList}
                         options={({ navigation }) => {
                              return {
                                   title: 'Lista de Usuarios',
                                   headerRight: () => (
                                        <Button
                                             onPress={() => navigation.navigate('UserForm')}
                                             type='clear'
                                             icon={<Icon name='add' size={25} color={'#fff'}/>}
                                        />
                                   )
                              }
                         }}
                    />
                    <Stack.Screen
                         name='UserForm'
                         component={UserForm}
                         options={{
                              title: 'Formulario de Usuarios'
                         }}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     </UsersProveider>
  )
}

const screenOptions = {
     headerStyle: {
          backgroundColor: '#f4511e'
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
          fontWeight: 'bold'
     }
}

export default App;