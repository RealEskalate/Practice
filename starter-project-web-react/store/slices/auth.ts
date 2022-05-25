import {Dispatch, createSlice, createSelector} from "@reduxjs/toolkit";
import { type } from "os";
import { apiCallBegan } from "../api";


const initialState = {user:null, isRegistered: false};

const slice = createSlice({
    name: "Authentication",
    initialState,
    reducers:{
        loginSuccess: (state, action)=>{
            state.user = action.payload.user;   
            state.isRegistered = true;
        },
        registerSuccess: (state, action)=>{
            state.isRegistered = true;  
        },
        logout: (state, action)=>{    
            state.user = null;      
        }

    }
})

export const {loginSuccess, registerSuccess, logout} = slice.actions;

export default slice.reducer;

interface UserLogin {
    name: String,
    email: String,
}

export const login = (data: any)=> (dispatch: Dispatch)=>{
    dispatch(loginSuccess(data));
}

interface UserRegister {
    firstName: String, 
    lastName: String,
    username: String,
    password: String,
    confirmPassword: String}

export const register = (data: UserRegister) => (dispatch: Dispatch)=>{
    dispatch({type:apiCallBegan.type, payload:{url: "/register", method: "post",onSuccess: registerSuccess.type, data}});
}

export const getAuth = createSelector(
    (state: any)  => state.entities.authentication,
    auth => auth
)