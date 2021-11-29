import axios from "axios"

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const token = localStorage.getItem("_auth")
    config.headers.common["Authorization"] = `Bearer ${token}`
    config.baseURL = "https://books.ioasys.com.br/api/v1"

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
}
