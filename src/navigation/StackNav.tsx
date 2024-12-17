import React from 'react';
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/profile';
import SettingScreen from '../screens/Settings';
import { RootStackParamsList } from '../navigationtype/NavigationType';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import CartScreen from '../screens/CartScreen';
import MapScreen from '../screens/MapScreen';
import MessagingScreen from '../screens/Messaging';


const StackNav = createNativeStackNavigator<RootStackParamsList>();
const StackNavigater=()=>{
    return(
        <StackNav.Navigator   screenOptions={{
            headerShown:false,
        }}>
            <StackNav.Screen name='HomeScreen' component={HomeScreen}/>
            <StackNav.Screen name='Profile' component={ProfileScreen}/>
            <StackNav.Screen name='Settings' component={SettingScreen}/>
            <StackNav.Screen name='Login' component={LoginScreen}/>
            <StackNav.Screen name='Register' component={RegisterScreen}/>
            <StackNav.Screen name='Cart' component={CartScreen}/>
            <StackNav.Screen name='Map' component={MapScreen}/>
            <StackNav.Screen name='Chat' component={MessagingScreen}/>
        </StackNav.Navigator>
    )
}

export default StackNavigater