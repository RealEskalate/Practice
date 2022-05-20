import { combineReducers } from '@reduxjs/toolkit'
import blog from './slices/blogs'
import authentication from './slices/auth'
import profile from './slices/profile'

export default combineReducers({
  profile,
  blog,
  authentication,
})
