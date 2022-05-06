import {createSelector, createSlice} from "@reduxjs/toolkit";


const initialState = {isLogin: false, user:null,token:null};

const slice = createSlice({
    name: "Authentication",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.isLogin = true;
            state.user = action.payload.user; 
            state.token = action.payload.token
            
            
        },
        register: (state, action)=>{
            state.isLogin = true;
            state.user = action.payload.user; 
            state.token = action.payload.token
            
        },
        logout: (state, action)=>{
            state.isLogin = false;
            state.user = null;
            state.token = null;
            
        }
    }
})

export const {login, register, logout} = slice.actions;

export default slice.reducer;

