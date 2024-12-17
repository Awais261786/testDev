import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from "react-native"
import { SV } from "../custom/customBackground"
import { Images } from "../Image"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("screen")
const Product = ({ item, ExtraStyle,onPress , isItemCart }: any) => {

    return (
        <View style={[styles.container, ExtraStyle]}>
            <View style={styles.itemrow}>
                <Image source={{ uri: item.image }} style={styles.image} />
               <View style={{width:width/2,}}>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.description}>{item.description.substring(0,70)}</Text>
               <Text style={styles.count}>{`Left Product: ${item.rating.count}`}</Text>
               </View>
            </View>
            <View style={{marginLeft:20, flexDirection:"row",gap:8, marginTop:10,}}>
                <View style={{width:width/1.5,}}>
                <Text style={styles.price}>{`Price: ${item.price}$`}</Text>
                <Text style={styles.price}>{`Rating: ${item.rating.rate}`}</Text>
                </View>
               {isItemCart ?  <Pressable onPress={onPress}>
                    <Image source={Images.cart} style={{width:40, height:40, resizeMode:"contain",marginTop:10}}/>
                </Pressable>: <Pressable onPress={onPress}>
                    <Image source={Images.addtocart} style={{width:40, height:40, resizeMode:"contain",marginTop:10}}/>
                </Pressable>}
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: width / 1.1,
        borderWidth: 2,
        borderColor: "green",
        marginLeft: 20,
        borderRadius: 20,
        padding:10,
    },
    itemrow: {
        flexDirection:"row",
        gap:8,
    },
    image: {
        width: width /4,
        height: height /7,
        resizeMode: "cover",
        borderRadius: 20,
        marginLeft: 10,
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


})