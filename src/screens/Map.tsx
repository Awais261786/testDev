import React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"
import { SV } from "../custom/customBackground"
import { Images } from "../Image"
import BackGround from "../custom/Backup"
import { HomeStackScreenProps } from "../navigationtype/NavigationType"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ navigation }: HomeStackScreenProps<"Profile">) => {
    return (
        <BackGround>
            <View style={styles.container}>
                <MapView
                    // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                >
                </MapView>
            </View>
        </BackGround>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
    //   ...StyleSheet.absoluteFillObject,
    //   height: 400,
    //   width: 400,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    flex:1
    },
    map: {
    //   width:"100%",
    //   height:"100%",
    flex:1,
    },
   });