import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamsList={
    Home:undefined,
    Profile:undefined,
    Settings:undefined,
    Cart:any,
    
}


export type AuthStackParamList={
    Login:undefined,
    Register:undefined,
}
export type AppStackParamList={
    Home:any,
    Product:any,
    Cart:any,
    Profile:any,
}



export type HomeStackScreenProps<Screen extends keyof RootStackParamsList>=
NativeStackScreenProps<RootStackParamsList, Screen>

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList>=
NativeStackScreenProps<AuthStackParamList, Screen>

export type AppStackScreenProps<Screen extends keyof AppStackParamList>=
NativeStackScreenProps<AppStackParamList, Screen>