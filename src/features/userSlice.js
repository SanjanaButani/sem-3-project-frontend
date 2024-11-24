import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: sessionStorage.getItem('b-token') ? true : false,
    token: null || sessionStorage.getItem('b-token'),
    userType: null || sessionStorage.getItem('b-ust'),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.accessToken;
            state.userType = action.payload.userType;
        },
        LOGOUT: (state, action) => {
            state.isLoggedIn = false;
            state.token = null;
            state.userType = null;
        },
        REGISTER: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.accessToken;
            state.userType = action.payload.userType;
        }
    }
});

export const { LOGIN, LOGOUT, REGISTER } = userSlice.actions;

export default userSlice.reducer;