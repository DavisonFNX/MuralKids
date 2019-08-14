/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Educador from './src/screens/educador/Educador';
import Responsavel from './src/screens/responsavel/Responsavel';
import Header from'./src/screens/Header';
import Main from './src/screens/Main';

AppRegistry.registerComponent(appName, () => Main);
