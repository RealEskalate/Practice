import { createSlice, createSelector } from '@reduxjs/toolkit'
import { userInfo } from 'os'
import * as actions from '../api'
import { HYDRATE } from 'next-redux-wrapper'
const slice = createSlice({
  name: 'blogs',
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
      posts.value = [...posts.value, action.payload]
      posts.loading = false
      posts.error = null
    },
    blogsRecived: (posts, action) => {
      posts.value = action.payload
      posts.loading = false
      posts.error = null

    }
  },
})

const { requestFailed, requested, postAdded , blogsRecived} = slice.actions
export default slice.reducer

export const addBlog = (post) => (dispatch, getState) => {
  // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU0MDk1NzU5LCJleHAiOjE2NTQwOTkzNTl9.-WPvKbZ1LDNkhl_aWVW4y21G-UD4UGobXMe3tVutA-M"
     const data = {title:post.title, content: post.content,description: post.content, }
  dispatch(
    actions.apiCallBegan({
      url: 'articles',
      onStart: requested.type, // before api request for let us now we are gonna call api call and we enable loading on that type of thing
      onSuccess: postAdded.type, // if it successeded this action will be dispatch
      onFailed: requestFailed.type, // if it failed this action will be dispatch
      method: 'post', // type of the post,
      data,
      headers: { Authorization: `Bearer ${token}` }
    })
  )
}

export const loadBlogs = () => (dispatch, getState) => {
  dispatch(
    actions.apiCallBegan({
      url: "articles/all",
      onStart: requested.type,
      onSuccess: blogsRecived.type,
      onFailed: requestFailed.type,
      method:'get'
    })
  )
}
export const getBlogs = createSelector(
  (state) => state.entities.blog.value,
  (blogs) => blogs
)

export const isBlogLoading = createSelector(
  state => state.entities.blog.loading,
  isLoading => isLoading
)

// export const addPost = (post) => (dispatch, getState) => {
//   // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU0MDg3NTk3LCJleHAiOjE2NTQwOTExOTd9.ip8QXndJW41QoeSTwX2zBCUKrlUxcodtuxFayPRhp5Q"
//   const data = {title:post.title, content: post.content,description: post.content, }
//   dispatch(
//     actions.apiCallBegan({
//       url: 'articles',
//       onStart: requested.type, // before api request for let us now we are gonna call api call and we enable loading on that type of thing
//       onSuccess: postAdded.type, // if it successeded this action will be dispatch
//       onFailed: requestFailed.type, // if it failed this action will be dispatch
//       method: 'post', // type of the post,
//       data,
//       headers: { Authorization: `Bearer ${token}` }
//     })
//   )
// }
