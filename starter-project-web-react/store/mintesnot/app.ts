import { configureStore,  } from "@reduxjs/toolkit";
import blogReducer from "./blog/Blog"
import { blogApiSlice } from "./blog/BlogApiSlice";


export const store = configureStore({
    reducer:{
        blog: blogReducer,
        [blogApiSlice.reducerPath]: blogApiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(blogApiSlice.middleware)
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



