import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { userInfo } from 'os'
import * as actions from '../api'
import { HYDRATE } from 'next-redux-wrapper'
import {AppDispatch, RootState} from "../configureStore"
interface blogState {
  value: object[],
  loading: boolean,
  commentLoading:boolean,
  error:string | null,
  singleBlog: object,
  comments: object[]
}
const slice = createSlice({
  name: 'blogs',
  initialState: {
    value: [],
    loading: false,
    commentLoading: false,
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
    },
    comments: []
  },
  reducers: {
    requested: (posts:blogState) => {
      posts.loading = true
      posts.error = null
    },
    commentRequested: (posts:blogState) => {
      posts.commentLoading = true
    },
    requestFailed: (posts:blogState, action:PayloadAction<string, string>) => {
      posts.loading = false
      posts.commentLoading = false
      posts.error = action.payload
    },
    postAdded: (posts:blogState, action:PayloadAction<object, string>) => {
      posts.value = [...posts.value, action.payload]
      posts.loading = false
      posts.error = null
    },
    blogsReceived: (posts:blogState, action:PayloadAction<object[] , string>) => {
      posts.value = action.payload
      posts.loading = false
      posts.error = null

    }, 
    singleLoaded: (state:blogState, action:PayloadAction<object, string>) => {
      state.singleBlog = action.payload
      state.loading = false
      state.error = null
    }, 
    commentsLoaded: (state:blogState, action:PayloadAction<object[], string>) => {
      state.comments = action.payload
      state.commentLoading = false
    },
    commentAdded: (state:blogState) => {
      state.commentLoading = false
    }
  },
})

const { requestFailed, requested, commentRequested, postAdded, 
    commentAdded , blogsReceived, singleLoaded, commentsLoaded } = slice.actions
export default slice.reducer
interface postType {
  title:string,
  content:string
}

export const addBlog = (post: postType , token:string) => 
            (dispatch:AppDispatch, getState:RootState) => {
  // when apiCallBegan dispached the middleware(api middleware) we have configured in the configureStore will handle it first
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU0NDkwMzYyLCJleHAiOjE2NTQ0OTM5NjJ9.RI5Wamlrt12FDlj8bNhidgcdSIJH2DhL5VcuHzs7EBM"
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

export const loadBlogs = () => (dispatch:AppDispatch, getState:RootState) => {
  dispatch(
    actions.apiCallBegan({
      url: "articles/all",
      onStart: requested.type,
      onSuccess: blogsReceived.type,
      onFailed: requestFailed.type,
      method:'get',
      data :{},
      headers :{}
    })
  )
}

export const loadSingleBlog = (id:string) => (dispatch:AppDispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: "articles/" + id,
      onStart: requested.type,
      onSuccess: singleLoaded.type,
      onFailed: requestFailed.type,
      method:'get',
      data :{},
      headers :{}

    })
  )
  dispatch(loadComments(id))
}

export const loadComments = (id:string) => (dispatch:AppDispatch) => {
  dispatch(
    actions.apiCallBegan({
      url: "comments/" + id,
      onStart: commentRequested.type,
      onSuccess: commentsLoaded.type,
      onFailed: requestFailed.type,
      method:'get',
      data :{},
      headers :{}
    })
  )
}

export const addComment = ({id, text, token}:{id:string, text:string, token:string}) => (dispatch:AppDispatch, getState:RootState) => {
  const data:object = { text:text }
  dispatch(
    actions.apiCallBegan({
      url: "comments/" + id,
      onStart: commentRequested.type, // before api request for let us now we are gonna call api call and we enable loading on that type of thing
      onSuccess: commentAdded.type, // if it succeeded this action will be dispatch
      onFailed: requestFailed.type, // if it failed this action will be dispatch
      method: 'post', // type of the post,
      data,
      headers: { Authorization: `Bearer ${token}` }
    })
  )
  dispatch(loadComments(id))
}

export const getSingleBlog = createSelector(
  (state:RootState) => state.entities.blog.singleBlog,
  (blog:object) => blog
)

export const getBlogs = createSelector(
  (state:RootState) => state.entities.blog.value,
  (blogs:object[]) => blogs
)

export const getComments = createSelector(
  (state:RootState) => state.entities.blog.comments,
  (blogs:object[]) => blogs
)

export const isBlogLoading = createSelector(
  (state:RootState) => state.entities.blog.loading,
  (isLoading:boolean) => isLoading
)

export const isCommentLoading = createSelector(
  (state:RootState)=> state.entities.blog.commentLoading,
  (isLoading:boolean) => isLoading
)