import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import reducer from './reducer';
import apiCall from "./middlware/apiCall";
import { useMemo } from "react";
const makeStore = (initialState) => configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware(),
        apiCall
    ],
    preloadedState:initialState

});



let store
  
  
export const initailzeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)

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

export function useStore(intialState){
    const store= useMemo(() => initailzeStore(intialState), [intialState])
    return store
}
