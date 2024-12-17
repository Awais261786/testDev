import React, { Children } from "react"
import { ImageBackground } from "react-native"
import { Text as DefaultText, View as DefaultView, View } from "react-native";
import { Images } from "../Image";

export type ViewProps =DefaultView["props"];

export function SV({children}:ViewProps) {
    // const { style, ...otherProps } = props;
  
    return (
      <View
        style={[
          {
            flex: 1,
          },
        //   style,
        ]}
      >
        <ImageBackground source={Images.BackGround}>
        {children}
        </ImageBackground>
      </View>
    );
  }