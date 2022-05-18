import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import combinedReducer from './reducer'
import apiCall from './middlware/apiCall'
import { useMemo } from 'react'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    },
  }
}
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, combinedReducer)



const initStore = () => {
  return configureStore({
    reducer:persistedReducer,
    middleware: [
      ...getDefaultMiddleware({ serializableCheck: false }),
      apiCall,
    ]
  })}

export const wrapper = createWrapper(initStore)


