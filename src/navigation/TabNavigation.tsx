import React, { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Platform,
  StyleSheet,
  Image,
  PermissionsAndroid,
  PermissionStatus,
  AppState,
  Dimensions,
} from 'react-native';
import { AppStackParamList } from '../navigationtype/NavigationType';
import { useNavigation } from '@react-navigation/native';
import StackNavigater from './StackNav';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/profile';
import SettingScreen from '../screens/Settings';
import CartScreen from '../screens/CartScreen';
import MessagingScreen from '../screens/Messaging';
import MapScreen from '../screens/Map';
import { Images } from '../Image';

const Tab =createBottomTabNavigator<AppStackParamList>()
const { width, height, fontScale } = Dimensions.get('screen');
const AppNavigator =()=>{
    const navigation =useNavigation()
    const { width, height, fontScale } = Dimensions.get('screen');

    return(
        <Tab.Navigator
        screenOptions={({ }) => {
        //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const hideTabBarScreens = ['chat'];

          return {
            tabBarStyle: {
              backgroundColor: "white",
              height: Platform.OS === 'ios' ? 75 : 70,
              paddingBottom: Platform.OS === 'ios' ? 20 : 10,
            //   display: hideTabBarScreens.includes(routeName) ? 'none' : 'flex',
              borderTopWidth: 1,
              borderTopColor: "red",
            },
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 0,
            },
            tabBarActiveTintColor: '#0B0B0B',
            tabBarInactiveTintColor: "green",
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarAnimation: 'spring',
            tabBarAnimationDuration: 300,
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackNavigater}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={Images.HomeIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({color}) => {
              return (
                <Image
                  source={Images.cart}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        />
         <Tab.Screen
          name="Messaging"
          component={MessagingScreen}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={Images.MessageIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        />


<Tab.Screen
          name="Map"
          component={MapScreen}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={Images.MapIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={Images.AccountIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        />
        {/* <Tab.Screen
          name="Home"
          component={StackNavigater}
        //   listener={disableTabs}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                // <Image
                //   source={images.home}
                //   style={[styles.icon, { tintColor: color }]}
                // />
                <></>
              );
            },
          }}
        //   listeners={{
        //     tabPress: () => {
        //       triggerHapticFeedback();
        //     },
        //   }}
        /> */}
       
      </Tab.Navigator>
    )

}

export default AppNavigator

const styles = StyleSheet.create({
    icon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginBottom: 2,
    },
    tabBarLableStyle: {
      fontSize: 10,
      fontFamily: 'Manrope-Bold',
      lineHeight: 12,
      marginTop: 0,
      paddingTop: 0,
    },
    dot: {
      zIndex: 1,
      height: height / 110,
      width: width / 50,
      backgroundColor: '#FF0000',
      borderRadius: 30,
      position: 'absolute',
      top: -1,
      left: 15,
    },
  });