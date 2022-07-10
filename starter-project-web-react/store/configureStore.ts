import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import reducer from './reducer';
import apiCall from "./middlware/apiCall";
import { useMemo } from "react";
const makeStore = (initialState:any) => configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware(),
        apiCall
    ],
    preloadedState:initialState

});



let store:any
  
  
export const initailzeStore = (preloadedState:any) => {
    let _store:any = store ?? makeStore(preloadedState)

    if (preloadedState && store){
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
          })
          store = undefined
    }

    if(typeof window == 'undefined') return _store
    if (!store) store = _store
    return _store
}

export function useStore(intialState:any){
    const store= useMemo(() => initailzeStore(intialState), [intialState])
    return store
}
const s:any = makeStore({})
export type AppDispatch = typeof s.dispatch;
export type RootState = ReturnType<typeof s.getState>;
export function useStoreTest(intialState:any):any{
  const store=  initailzeStore(intialState)
  return store
}
