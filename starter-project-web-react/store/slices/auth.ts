import {createSelector, createSlice} from "@reduxjs/toolkit";


const initialState = {isLogin: false};

const slice = createSlice({
    name: "Authentication",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.isLogin = true; 
             
        },
        register: (state, action)=>{
            state.isLogin = true;
            
        },
        logout: (state, action)=>{
            console.log(state);
            
        }
    }
})

export const {login, register, logout} = slice.actions;

export default slice.reducer;

