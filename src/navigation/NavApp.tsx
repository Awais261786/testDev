import React from "react";
import {} from "react-native"
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import AuthStackNavigator from "./AuthStack";
import StackNavigater from "./StackNav";
import { useSelector } from "react-redux";

const NavApp=()=>{
    const auth =useSelector((data)=> data?.auth)
    
return(
    <NavigationContainer>
        <AuthStackNavigator/>
        <StackNavigater/>
    </NavigationContainer>
)
}


export default NavApp