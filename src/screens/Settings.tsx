import React from "react"
import {View, Text, Pressable} from "react-native"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import BackGround from "../custom/Backup"
import CustomButton from "../custom/CustomButton"
import { useDispatch, useSelector } from "react-redux"
import  auth  from "@react-native-firebase/auth"
import { userLogout } from "../redux/AuthSliceBrainApp"

const SettingScreen=({navigation}:HomeStackScreenProps<"Settings">)=>{
    const userdetial =useSelector((state: any)=> state.auth)
    const dispatch =useDispatch()
    console.log("userdetial--=-->", userdetial)
    const SinoutHandle =()=>{
        auth()
      .signOut()
      .then((res) => console.log('User signed out!', res.user));
      dispatch(userLogout(null))
      navigation.navigate("Register")
      }
    return(
        <BackGround>
        <View style={{ alignSelf: 'center', top: 380 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" , color:"green"}}>SettingScreen</Text>
        <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{ fontSize: 20, fontWeight: "bold" , color:"green"}}>GO Back To Home</Text>
        </Pressable>
        <CustomButton
             titleText="Sign Out"
             onPress={()=> SinoutHandle()}
            />
    </View>
    </BackGround>
    )
}

export default SettingScreen