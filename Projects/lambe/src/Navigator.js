/*
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const MenuRoutes = {
     Feed: {
          name: 'Feed',
          screen: Feed,
          navigationOptions: {
               title: 'Feed',
               tabBarIcon: ({ tintColor }) => 
                    <Icon name='home' size={30} color={tintColor} />
          }
     },
     Add: {
          name: 'AddPhoto',
          screen: Feed,
          navigationOptions: {
               title: 'Add Picture',
               tabBarIcon: ({ tintColor }) => 
                    <Icon name='camera' size={30} color={tintColor} />
          }
     },
     Prodile: {
          name: 'Profile',
          screen: Feed,
          navigationOptions: {
               title: 'Profile',
               tabBarIcon: ({ tintColor }) => 
                    <Icon name='user' size={30} color={tintColor} />
          }
     }
}

const MenuConfig = {
     initialRouteName: 'Feed',
     tabBarOptions: {
          showLabel: false
     }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator

*/

import 'react-native-gesture-handler';
import React from 'react';
import { createSwitchNavigator } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register';
 
 
const Tab = createBottomTabNavigator();
const Switch = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouver
 
}, {
    initialRouteName: 'Profile'
})
const authRouver = createStackNavigator({
    Login: { screen: Login, name: 'Login'},
    Register: { screen: Register, name: 'Register'}
}, {
    initialRouteName: 'Login'
})
 
const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Feed'}
                tabBarOptions={{ showLabel: false }}>
                <Tab.Screen
                    name={'Feed'}
                    component={Feed}
                    options={{
                        title: 'Feed',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="home"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={'AddPhoto'}
                    component={AddPhoto}
                    options={{
                        title: 'Add Picture',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="camera"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={'Profile'}
                    component={Switch}
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="user"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
 
export default Navigator;