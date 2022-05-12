import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import reducer from './reducer'
import apiCall from './middlware/apiCall'
import { useMemo } from 'react'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

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

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, reducer)

const makeStore = (initialState) =>
  configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({ serializableCheck: false }),
      apiCall,
    ],
    preloadedState: initialState,
  })

let store

export const initailzeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window == 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(intialState) {
  const store = useMemo(() => initailzeStore(intialState), [intialState])
  const persistor = persistStore(store)
  return { store, persistor }
}
