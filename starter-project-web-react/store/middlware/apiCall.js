import * as actions from '../api'
import axios from 'axios'
// this api middleware to handle api call the api call will be made only heer
const apiCall =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { url, method, onSuccess, data } = action.payload

    //   if (onStart) dispatch({ type: onStart }) // loading before the api call

    try {
      //     const response = await axios.request({
      //         baseURL: 'our base url gooes heer',
      //         url,
      //         method,
      //         data,
      //         headers
      //     })
      const response = {
        data: {
          json: {
            data,
          },
        },
      }

      const { status, result } = routeFunc(data, url)

      if (status) {
        dispatch(actions.apiCallSuccess())
        if (onSuccess) dispatch({ type: onSuccess, payload: result })
      }

      // our passed success action will dispatch  heer if there is one
    } catch (error) {
      console.log(error.message)
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
