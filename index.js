/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';


AppRegistry.registerComponent(appName, () => Login);
