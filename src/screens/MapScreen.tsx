import React from "react"
import { View, Text, ImageBackground } from "react-native"
import { SV } from "../custom/customBackground"
import { Images } from "../Image"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"

const MapScreen = ({navigation}:HomeStackScreenProps<"Profile">) => {
    return (
            <BackGround>
                <View style={{ alignSelf: 'center', top: 380 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" , color:"green"}}>MapScreen</Text>
            </View>
            </BackGround>
    )
}

export default MapScreen