/**
 * @format
 */
//registro dos componentes, porta de entrada
import {AppRegistry} from 'react-native';
import App from './src/App';  // buscando componente dentro do diretorio 'src'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
