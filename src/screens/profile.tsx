import React, { useMemo, useRef } from "react";
import { View, Text, SafeAreaView, Pressable, Platform } from "react-native";
import { HomeStackScreenProps } from "../navigationtype/NavigationType";
import Header from "../custom/Header";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";

const ProfileScreen = ({ navigation }: HomeStackScreenProps<"Profile">) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(
    () => [Platform.OS === 'ios' ? '95.5' : '104'],
    [],
  );

  return (
   <GestureHandlerRootView>
     <SafeAreaView style={{ flex: 1 }}>
      <Header title="Profile" onPress={() => navigation.goBack()} isback />
      <View>
        <Pressable
          style={{
            width: 170,
            height: 70,
            backgroundColor: "blue",
            margin: 60,
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
          onPress={() => {
            console.log("Opening bottom sheet");
            bottomSheetModalRef.current?.open();
          }}
        >
          <Text style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold"
          }}>
            BottomSheet--...
          </Text>
        </Pressable>
        {/* <BottomSheet
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          // index={0}
        >
          <View>
          </View>
        </BottomSheet> */}
       <RBSheet ref={bottomSheetModalRef}>
       
      </RBSheet>
      </View>
    </SafeAreaView>
   </GestureHandlerRootView>
  );
};

export default ProfileScreen;
