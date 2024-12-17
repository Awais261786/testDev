import React from "react";
import {ImageBackground, View} from "react-native"
import { Images } from "../Image";


const BackGround=({children}:any)=>{
return(
    <ImageBackground source={Images.BackGround} resizeMode="cover"  style={{flex:1}}>
        {children}
    </ImageBackground>
)
}

export default BackGround