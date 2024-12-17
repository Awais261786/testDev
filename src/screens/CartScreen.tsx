import React from "react"
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, FlatList, TextInput } from "react-native"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../custom/CustomButton"
import auth from "@react-native-firebase/auth"
import { userLogout } from "../redux/AuthSliceBrainApp"
import { useGetDataQuery } from "../services/Api"
import Header from "../custom/Header"
import Product from "../custom/Product"
import { addItemToCart } from "../redux/CartSlice"
import CartItem from "../custom/CartItem"

const CartScreen = ({ navigation }: HomeStackScreenProps<"Cart">) => {
  const userdetial = useSelector((state: any) => state.auth)
  const cartItem = useSelector((state: any) => state.cart.items)
  const dispatch = useDispatch()
  const { data: userdata } = useGetDataQuery()
  const handleAddtoCart = (product: any) => {
    dispatch(addItemToCart(product))
  }
  const handleGotoCart = () => {
    navigation.navigate("Cart")
  }

  const isItemCart = (id: any) => cartItem.some((item: any) => item.id === id)

  const Navigation = useNavigation();
  return (
    <SafeAreaView >
      <Header
        title="Cart"
        isback
        onPressCart={() => navigation.goBack()}
      />
      <View>
        <FlatList
          data={cartItem}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <CartItem
               item={item}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default CartScreen