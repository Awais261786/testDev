import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { api } from "../services/Api";
import authSliceBrain from "./AuthSliceBrainApp";
import RootReducer from "./RootReducer";

// Define the shape of the root state
export type RootState = ReturnType<typeof store.getState>;

// Define the type for the app dispatch function
export type AppDispatch = typeof store.dispatch;

// Configure the Redux store
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'auth/loggedIn',],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create a persistor instance for redux-persist
export const persistor = persistStore(store);
