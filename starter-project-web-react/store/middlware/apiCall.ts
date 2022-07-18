import * as actions from '../api'
import axios from 'axios'
import { AppDispatch, RootState } from '../configureStore'
import { PayloadAction } from '@reduxjs/toolkit'
// this api middleware to handle api call the api call will be made only heer
interface requestType {
  url: string, method: string, onSuccess: string, data: object, onStart: string, onFailed: string, headers: object
}
const apiCall =
  ({ dispatch }: { dispatch: AppDispatch }) =>
    (next: any) =>
      async (action: PayloadAction<object, string>) => {
        if (action.type !== actions.apiCallBegan.type) return next(action)

        const { url, method, onSuccess, data, onStart, onFailed, headers } : any= action.payload

        if (onStart) dispatch({ type: onStart }) // loading before the api call
        next(action)
        try {
          const response = await axios.request({
            baseURL: "https://blog-app-backend.onrender.com/api",
            url,
            method,
            data,
            headers
          })
          // console.log(response)
          dispatch(actions.apiCallSuccess(response.data)) // ourt general success action will dispatch heer
          if (onSuccess) dispatch({ type: onSuccess, payload: response.data }) // our passed success action will dispatch  heer if there is one
        } catch (error:any) {
          dispatch(actions.apiCallFailed(error!.message!) )
          if (onFailed)
            dispatch({
              type: onFailed,
              payload: error.response ? error.response.data : error.message,
            })
        }
      }
export default apiCall
