export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      redirect('/abraham/login')
    }
  })
}
