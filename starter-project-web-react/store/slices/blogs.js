import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as actions from '../api'
import { RootState } from "../entites";
const slice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
    loading: false,
    error: null,
  },
  reducers: {
    requested: (posts, action) => {
      posts.loading = true
      posts.error = null
    },
    requestFailed: (posts, action) => {
      posts.loading = false
      posts.error = action.payload
    },
    postAdded: (posts, action) => {
      posts.value.append(action.payload)
      posts.loading = false
      posts.error = null
    },
  },
})

const { requestFailed, requested, postAdded } = slice.actions
export default slice.reducer

export const addBlog = (post) => (dispatch, getState) => {
  // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first
  dispatch(
    actions.apiCallBegan({
      url: 'this request url after the base url',
      onStart: requested.type, // before api request for let us now we are gonna call api call and we enable loading on that type of thing
      onSuccess: postAdded.type, // if it successeded this action will be dispatch
      onFailed: requestFailed.type, // if it failed this action will be dispatch
      method: 'post', // type of the post,
      data: post,
    })
  )
}

export const getBlogs = createSelector(
  (state) => state.entities.blog.value,
  (blogs) => blogs
)

export const addPost = (post) => (dispatch, getState) => {
  // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first

  dispatch(
    actions.apiCallBegan({
      url: 'this request url after the base url',
      onStart: requested.type, // before api request for let us now we are gonna call api call and we enable loading on that type of thing
      onSuccess: postAdded.type, // if it successeded this action will be dispatch
      onFailed: requestFailed.type, // if it failed this action will be dispatch
      method: 'post', // type of the post,
      data: post,
    })
  )
}
