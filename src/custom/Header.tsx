import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from "react-native"
import { SV } from "../custom/customBackground"
import { Images } from "../Image"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import { Dimensions } from "react-native"
import { useSelector } from "react-redux"
const { width, height } = Dimensions.get("screen")
const Header = ({ onPress, title, isback, iscart, onPressCart }: any) => {
    const cartItem = useSelector((state: any) => state.cart.items)
    return (
        <View style={styles.container}>
            {isback && <Pressable style={{ marginTop: 45 }} onPress={onPress}>
                <Image source={Images.arrow} style={{ width: 40, height: 40, resizeMode: "contain", backgroundColor: "white" }} />
            </Pressable>}
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "green", textAlign: "center", marginTop: 40, marginLeft: isback ? 140 : 150, }}>{title}</Text>
            {iscart &&
                <View style={{ flexDirection: "row" }}>
                    <Pressable style={{ marginTop: 45, marginLeft: 110 }} onPress={onPressCart}>
                        <Image source={Images.cart} style={{ width: 40, height: 40, resizeMode: "contain", }} />
                    </Pressable>
                    {cartItem.length > 0 && <View style={styles.indicator} >
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center", }}>{cartItem.length}</Text>
                    </View>}
                </View>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: width / 1,
        borderWidth: 2,
        height: height / 10,
        backgroundColor: "black",
        flexDirection: "row",
        // justifyContent:"space-evenly",

    },
    indicator: {
        position: "absolute",
        marginLeft: 120,
        marginTop: 38,
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: "red",
        left:27,

    }
})