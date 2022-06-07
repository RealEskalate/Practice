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
    singleBlog: {
      id: 32,
      title: "Trial title for a blog",
      createdAt: "2022-06-01T12:33:43.544Z",
      author: "This guy",
      "authorUserId": {
        "_id": "629618fad2f52861b8b30182",
        "fullName": "yohans hailu",
        "email": "yohanshailu@gmail.com",
        "__v": 0
      },
      img: "/img/trial-img.jpg",
      "imageUrls": [
        "http://res.cloudinary.com/hakimhub/image/upload/v1654086909/starter_project/pcen6idszptplrwluiym.png",
        "http://res.cloudinary.com/hakimhub/image/upload/v1654086911/starter_project/lx1fniji88ml2wtakvza.jpg"
      ],
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.`
    }
  },
  reducers: {
    requested: (posts, action) => {
      posts.loading = true
      posts.error = null
      console.log("request started")
    },
    requestFailed: (posts, action) => {
      posts.loading = false
      posts.error = action.payload
      console.log("request has failed")
    },
    postAdded: (posts, action) => {
      posts.value = [...posts.value, action.payload]
      posts.loading = false
      posts.error = null
    },
    blogsReceived: (posts, action) => {
      posts.value = action.payload
      posts.loading = false
      posts.error = null

    }, 
    singleLoaded: (state, action) => {
      state.singleBlog = action.payload
      state.loading = false
      state.error = null
    }
  },
})

const { requestFailed, requested, postAdded , blogsReceived, singleLoaded} = slice.actions
export default slice.reducer

export const addBlog = (post) => (dispatch, getState) => {
  // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU0NDkwMzYyLCJleHAiOjE2NTQ0OTM5NjJ9.RI5Wamlrt12FDlj8bNhidgcdSIJH2DhL5VcuHzs7EBM"
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
      onSuccess: blogsReceived.type,
      onFailed: requestFailed.type,
      method:'get'
    })
  )
}

export const loadSingleBlog = (id) => (dispatch, getState) => {
  dispatch(
    actions.apiCallBegan({
      url: "articles/" + id,
      onStart: requested.type,
      onSuccess: singleLoaded.type,
      onFailed: requestFailed.type,
      method:'get'
    })
  )
}

export const getSingleBlog = createSelector(
  (state) => state.entities.blog.singleBlog,
  (blog) => blog
)

export const getBlogs = createSelector(
  (state) => state.entities.blog.value,
  (blogs) => blogs
)

export const isBlogLoading = createSelector(
  state => state.entities.blog.loading,
  isLoading => isLoading
)
