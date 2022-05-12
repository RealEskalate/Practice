import { combineReducers } from '@reduxjs/toolkit'
import blog from './slices/blogs'
import authentication from './slices/auth'

export default combineReducers({
  blog,
  authentication,
})
