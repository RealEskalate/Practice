import * as actions from '../api'
import axios from 'axios'
// this api middleware to handle api call the api call will be made only heer
const apiCall =
  ({ dispatch }) =>
    (next) =>
      async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action)

        const { url, method, onSuccess, data, onStart, onFailed, headers } = action.payload

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
          dispatch(actions.apiCallSuccess(response.data)) // ourt general success action will dispatch heer
          if (onSuccess) dispatch({ type: onSuccess, payload: response.data }) // our passed success action will dispatch  heer if there is one
        } catch (error) {
          dispatch(actions.apiCallFailed(error.message))
          if (onFailed)
            dispatch({
              type: onFailed,
              payload: error.response ? error.response.data : error.message,
            })
        }
      }
export default apiCall

const routeFunc = (input, url) => {
  if (url == '/login') {
    return loginRoute(input)
  } else if (url == '/register') {
    return registerRoute(input)
  }
  return {
    status: false,
    result: null,
  }
}

const loginRoute = (input) => {
  const { username, password } = input

  if (username == 'user@blog' && password == 'a2sv') {
    return {
      status: true,
      result: {
        user: { username },
        token: 'kdlajdfadfaifafjsdfjaldfjadj',
      },
    }
  } else {
    return {
      status: false,
      result: null,
    }
  }
}

const registerRoute = (input) => {
  const { username, password, confirmPassword, firstName, lastName } = input

  if (password == confirmPassword) {
    return {
      status: true,
      result: {
        user: { username, fullname: firstName + ' ' + lastName },
        token: 'kdlajdfadfaifafjsdfjaldfjadj',
      },
    }
  } else {
    return {
      status: false,
      result: null,
    }
  }
}
