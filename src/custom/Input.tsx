import React from "react"
import {View, Text, Pressable, TouchableOpacity, TextInput} from "react-native"

type InputProps ={
value:string | any,
placeholderText: string,
onChangeText: (key: string | any) =>void,
secureTextEntry:boolean| any
}

const InputField: React.FC<InputProps>=({
value,
placeholderText,
onChangeText,
secureTextEntry
})=>{
    
    return(
        <TextInput
        value={value}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        secureTextEntry={secureTextEntry}
         style={{
            width:300,
            borderWidth:2,
            borderColor:"blue",
            borderRadius:20,
            padding:12,
            fontSize:20,
            marginVertical:10,
            color:"white"
         }}
        />
    )
}

export default InputField