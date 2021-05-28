import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import TaskList from './screens/TaskList'
import Auth from './screens/Auth'

import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import commonStyles from './commonStyles'

const menuConfig = {
     initialRouteName: 'Today',
     contentComponent: Menu,
     contentOptions: {
          labelStyle:{
               fontFamily: commonStyles.fontFamily,
               fontWeight: 'normal',
               fontSize: 20
          },
          activeLabelSctyle:{
               fontWeight: 'bold',
               color: '#080'
          }
     }
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuCOnfig)

const mainRoutes = {
     AuthOrApp: {
          name: 'AuthOrApp',
          screen: AuthOrApp
     },
     Auth: {
          name: 'Auth',
          screen: Auth
     },
     Home: {
          name: 'Home',
          screen: TaskList
     }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
     initialRouteName: 'AuthOrApp'
})

export default createAppContainer(mainNavigator)
