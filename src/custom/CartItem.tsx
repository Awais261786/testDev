import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from "react-native"
import { SV } from "../custom/customBackground"
import { Images } from "../Image"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("screen")
const CartItem = ({ item, ExtraStyle,onPress , isItemCart }: any) => {

    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: width / 1.05,
        borderWidth: 2,
        borderColor: "green",
        marginLeft: 10,
        borderRadius: 20,
        // padding:10,
    },
    itemrow: {
        flexDirection:"row",
        gap:8,
    },
    image: {
        width: width / 1.06,
        height: 230,
        resizeMode: 'stretch',
        borderRadius: 20,
    },
    title:{
        fontSize:20,
        fontWeight:"500",
        color:"black"
    },
    description:{
        fontSize:18,
        fontWeight:"400",
        color:"black",
        marginTop:4,
    },
    count:{
        fontSize:20,
        fontWeight:"600",
        color:"black",
        marginTop:4,
    },
    price:{
        fontSize:20,
        fontWeight:"500",
        marginTop:4,
        color:"green"
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        color:"black",
        marginTop:10
    }
})