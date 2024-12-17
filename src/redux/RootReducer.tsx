import { combineReducers } from "@reduxjs/toolkit";
import AuthSliceBrainApp from "./AuthSliceBrainApp";
import { api } from "../services/Api";
import CartSlice from "./CartSlice";




const RootReducer =combineReducers({
    auth: AuthSliceBrainApp,
    [api.reducerPath]: api.reducer,
    cart: CartSlice,
})

export default RootReducer