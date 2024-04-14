import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem("token")
    }
    return Promise.reject(error)
  }
)

export default api;