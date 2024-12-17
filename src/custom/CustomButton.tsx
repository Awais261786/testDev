import React from "react"
import {View, Text, Pressable, TouchableOpacity, TextInput, StyleSheet} from "react-native"

type Buttonprops ={
titleText: string,
onPress: ()=>void,
customStyle: any
}

const CustomButton: React.FC<Buttonprops>=({
    titleText,
    onPress,
    customStyle,
})=>{
    
    return(
        <Pressable
         style={[styles.btn, customStyle]}
         onPress={onPress}
        >
            <Text style={{
                fontSize:20,
                color:"white",
                alignSelf:"center",
                fontWeight:"bold"
            }}>{titleText}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles =StyleSheet.create({
    btn:{
        marginVertical:20,
        width:200,
        borderWidth:2,
        borderBottomWidth:5,
        borderRadius:5,
        borderColor:"blue",
        padding:6,
        alignSelf:"center",
    }
})