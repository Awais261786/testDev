import React, { useState } from "react"
import { View, Text, Pressable, TouchableOpacity, Image, Alert, ScrollView } from "react-native"
import BackGround from "../custom/Backup"
import { AuthStackScreenProps, HomeStackScreenProps } from "../navigationtype/NavigationType"
import { useNavigation } from "@react-navigation/native"
import { Images } from "../Image"
import InputField from "../custom/Input"
import CustomButton from "../custom/CustomButton"
import { useDispatch } from "react-redux"
import { loggedIn } from "../redux/AuthSliceBrainApp"
import firestore from '@react-native-firebase/firestore';


const LoginScreen = ({ navigation }: AuthStackScreenProps<"Login">) => {
  const [email, setEmail] = useState<any>()
  const [password, setpassword] = useState<any>()
  const [showPassword, setshowPassword] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = () => {
    if (email || password) {
      const data = {
        email: email,
        password: password
      }
      firestore().
      collection("users").
      where("email", "==", email).get().
      then((res) => {console.log("ress====>",JSON.stringify(res.docs[0].data()));
        // dispatch(loggedIn(res.docs[0].data()));
        // navigation.navigate("Home")
      }).
      catch((error)=>console.log(error))
      // dispatch(loggedIn(data))
      // navigation.navigate("Home")
    } else {
      Alert.alert("Missing Somthing", "Please Enter the Email and password for reacord", [
        {
          text: "cancel",
          onPress: () => console.log("cancel pressed"),
          style: 'cancel'
        },
        {
          text: "ok",
          onPress: () => console.log("ok pressed")
        }
      ])
    }
  }
  return (
    <BackGround>
      <ScrollView
        keyboardShouldPersistTaps="handled"
      >
        <View style={{
          alignSelf: 'center',
          marginTop: 150,
          borderWidth: 1,
          borderColor: "green",
          padding: 20,
          borderRadius: 20,
          borderBottomWidth: 5
        }}>
          <Image source={Images.BeachImage} resizeMode="cover" style={{ width: 90, height: 90, borderRadius: 90, alignSelf: "center", marginBottom: 20 }} />
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "green",
            fontStyle: "italic",
            alignSelf: "center",
            marginBottom: 20
          }}>Well Come To AK Travel Groups</Text>
          <InputField
            value={email}
            placeholderText="Email"
            onChangeText={(t) => setEmail(t)}
          />
          <View style={{ flexDirection: "row" }}>
            <InputField
              value={password}
              placeholderText="Password"
              onChangeText={(t) => setpassword(t)}
              secureTextEntry={showPassword}
            />
          </View>
          <Text style={{
            color: "red",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "right"
          }}>
            Forgot Passaword?
          </Text>
          <CustomButton
            titleText="Login"
            onPress={() => onSubmit()}
          />
          <Pressable
            style={{
              alignSelf: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{
              color: "green",
              fontSize: 15,
              fontWeight: "bold",

            }}>Create New Account?<Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white"
              }}
            >Register!</Text></Text>
          </Pressable>
        </View>
      </ScrollView>
    </BackGround>
  )
}

export default LoginScreen