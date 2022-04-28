import * as actions from '../api'
import axios from 'axios'
// this api middleware to handle api call the api call will be made only heer
const apiCall = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { url, onStart, onFailed, onSuccess, data, method, headers } = action.payload

    if (onStart) dispatch({ type: onStart }) // loading before the api call 
    next(action)

    try {
        const response = await axios.request({
            baseURL: 'our base url gooes heer',
            url,
            method,
            data,
            headers
        })

        dispatch(actions.apiCallSuccess(response.data.json)) // ourt general success action will dispatch heer
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data.json }) // our passed success action will dispatch  heer if there is one
    } catch (error) {
        console.log()
        dispatch(actions.apiCallFailed(error.message)) //ourt general onFailed action will dispatch heer
        if (onFailed) dispatch({
            type: onFailed, payload:
                error.response ? error.response.data.errors : error.message
        }) // our passed onFailed action will dispatch  heer if there is one
    }


}

export default apiCall;