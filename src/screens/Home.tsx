import React from "react"
import {View, Text, Pressable, TouchableOpacity, SafeAreaView, FlatList, TextInput} from "react-native"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../custom/CustomButton"
import  auth  from "@react-native-firebase/auth"
import { userLogout } from "../redux/AuthSliceBrainApp"
import { useGetDataQuery } from "../services/Api"
import Header from "../custom/Header"
import Product from "../custom/Product"
import { addItemToCart } from "../redux/CartSlice"

const HomeScreen=({navigation}:HomeStackScreenProps<"Home">)=>{
  const userdetial =useSelector((state: any)=> state.auth)
  const cartItem =useSelector((state: any)=> state.cart.items)
  const dispatch =useDispatch()
  console.log("userdetial--=-->", userdetial)
  console.log("cartItem--=-->", cartItem)

  const {data: userdata} =useGetDataQuery()

  console.log("data--==--->",userdata);


  const handleAddtoCart =(product: any)=>{
    dispatch(addItemToCart(product))
  }
  const handleGotoCart =()=>{
    navigation.navigate("Cart")
  }
  
  const isItemCart = (id: any) => cartItem.some((item: any)=> item.id === id)

  const SinoutHandle =()=>{
    auth()
  .signOut()
  .then((res) => console.log('User signed out!', res.user));
  dispatch(userLogout(null))
  navigation.navigate("Register")
  }
    const Navigation =useNavigation();
    return(
     <SafeAreaView >
        <Header 
          title="Home"
          iscart
          onPressCart={()=> navigation.navigate("Cart")}
          />
          <View>
            <FlatList
             data={userdata}
             keyExtractor={(item)=> item.id}
             renderItem={({item})=>{
              return(
                <Product
                item={item}
                onPress={()=> isItemCart(item.id)? handleGotoCart() : handleAddtoCart(item)}
                isItemCart={isItemCart(item.id)}
                />
              )
             }}
            />
          </View>
     </SafeAreaView>
    )
}

export default HomeScreen