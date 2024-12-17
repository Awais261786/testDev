import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


interface UserDetail {
    id: string;
    name: string;
    email: string;
   
}

interface AuthState {
    isLoggedIn: boolean;
    userDetail: UserDetail | null;
    token?: string | null; 
}


interface LoggedInPayload {
    user: UserDetail;
    token: string;
    User: any;
}

interface UpdateUserProfilePayload {
    name?: string;
    email?: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    userDetail: null,
    token: null,
};

const persistConfig = {
    key: "authSliceBrain",
    version: 1,
    storage:AsyncStorage,
    blacklist: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedIn: (state, action: PayloadAction<LoggedInPayload>) => {
            state.isLoggedIn = true;
            state.userDetail = action.payload;
            state.token = action.payload.token;
        },

        userLogout: (state) => {
            state.isLoggedIn = false;
            state.userDetail = null;
            state.token = null;
        },

        updateUserProfile: (state, action: PayloadAction<UpdateUserProfilePayload>) => {
            if (state.userDetail) {
                state.userDetail = { ...state.userDetail, ...action.payload };
            }
        },
    },
});

// Export actions and reducer
export const { loggedIn, userLogout, updateUserProfile } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
