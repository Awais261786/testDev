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
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
import  auth  from "@react-native-firebase/auth"



const RegisterScreen = ({ navigation }: AuthStackScreenProps<"Register">) => {
    const [email, setEmail] = useState<any>()
    const [password, setpassword] = useState<any>()
    const [about, setabout] = useState<any>()
    const [showPassword, setshowPassword] = useState(false)
    const dispatch = useDispatch()
    const userid = uuid.v4()
    const onSubmit = () => {
        if (!email || !password ) {
            Toast.show("somthing missing!")
            return false
        }
        auth()
            .createUserWithEmailAndPassword(email ,password)
            .then((res) => {
                // console.log('User account created & signed in!', res.user);
                dispatch(loggedIn(res.user))
               setTimeout(() => {
                // navigation.navigate('HomeScreen')
               }, 500);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
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
                    <InputField
                        value={password}
                        placeholderText="Password"
                        onChangeText={(t) => setpassword(t)}
                        secureTextEntry={showPassword}
                    />
                    {/* <InputField
                        value={about}
                        placeholderText="Tell Somthing About You?"
                        onChangeText={(t) => setabout(t)}
                    /> */}
                    <CustomButton
                        titleText="Register"
                        onPress={() => onSubmit()}
                    />
                </View>
            </ScrollView>
        </BackGround>
    )
}

export default RegisterScreen