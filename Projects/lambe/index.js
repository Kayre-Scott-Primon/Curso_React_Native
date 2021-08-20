import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import Navigator from './src/Navigator';
import { name } from './app.json'
import storeConfig from './src/store/storeConfig'
import axios from 'axios'
axios.defaults.baseURL= 'https://lambe-e9b9d-default-rtdb.firebaseio.com/'

const store = storeConfig()
const Redux = (props) => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(name, () => Redux)