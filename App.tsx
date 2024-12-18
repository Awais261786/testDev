/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/profile';
import ProfileScreen from './src/screens/profile';
import { SV } from './src/custom/customBackground';
import { Images } from './src/Image';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackGround from './src/custom/Backup';
import StackNavigater from './src/navigation/StackNav';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/Store';
import AuthStackNavigator from './src/navigation/AuthStack';
import AppNavigator from './src/navigation/TabNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setuser]=useState(false)
  const auth =useSelector((data)=> data?.auth.isLoggedIn)
 console.log("auth--",auth)
 const userGet =()=>{
  if(auth){
    setuser(true)
  }else{
    setuser(false)
  }
 }

 useEffect(()=>{
  userGet()
 },[auth])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
       <NavigationContainer>
      <StatusBar
       translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {
        user?<AppNavigator/> : <AuthStackNavigator/>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
