import React from 'react';
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/profile';
import SettingScreen from '../screens/Settings';
import { AuthStackParamList, RootStackParamsList } from '../navigationtype/NavigationType';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';


const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator=()=>{
    return(
        <AuthStack.Navigator  initialRouteName="Register" screenOptions={{
            headerShown:false,
        }}>
            <AuthStack.Screen name='Login' component={LoginScreen}/>
            <AuthStack.Screen name='Register' component={RegisterScreen}/>
            <AuthStack.Screen name='HomeScreen' component={HomeScreen}/>
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator