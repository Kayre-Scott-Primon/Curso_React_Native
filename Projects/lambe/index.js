import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import App from './src/App';
import { name } from './app.json'
import storeConfig from './src/store/storeConfig'
import axios from 'axios'
axios.defaults.baseURL= 'https://lambe-e9b9d-default-rtdb.firebaseio.com/'

const store = storeConfig()
const Redux = (props) => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(name, () => Redux)