/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import { store } from './src/redux/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const provider = () => {
    return (
          <GestureHandlerRootView style={{flex:1}}>
              <Provider store={store}>
                <App />
            </Provider>
          </GestureHandlerRootView>
    )
}
AppRegistry.registerComponent(appName, () => provider);
