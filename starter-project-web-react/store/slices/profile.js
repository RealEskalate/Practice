import { createSlice, createSelector } from '@reduxjs/toolkit'
import { userInfo } from 'os'
import * as actions from '../api'
import { HYDRATE } from 'next-redux-wrapper'
const slice = createSlice({
  name: 'profile',
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
  },
})

const { requestFailed, requested } = slice.actions
export default slice.reducer

export const getProfile = createSelector(
  (state) => state.entities.profile.value,
  (profile) => profile
)
