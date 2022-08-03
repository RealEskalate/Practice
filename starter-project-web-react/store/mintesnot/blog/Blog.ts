import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from "../app"

interface BlogState {
        value: object[],
        loading: boolean,
        commentLoading:boolean,
        error:string | null,
        singleBlog: object,
        comments: object[]  
}

const initialState = {
      value: [],
      loading: false,
      commentLoading: false,
      error: null,
      singleBlog: {},
      comments:[]
} as BlogState

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
          postAdded: (state, action:PayloadAction<object, string>) => {
            state.value = [...state.value, action.payload]
            state.loading = false
            state.error = null
          },
          singleLoaded: (state, action:PayloadAction<object[], string>) => {
            state.singleBlog = action.payload
            state.loading = false
            state.error = null
          }, 
          commentsLoaded: (state, action:PayloadAction<object[], string>) => {
            state.comments = action.payload
            state.commentLoading = false
          },
          commentAdded: (state) => {
            state.commentLoading = false
          }
    }
})

export const { postAdded, commentAdded , singleLoaded, commentsLoaded } = blogSlice.actions

export default blogSlice.reducer