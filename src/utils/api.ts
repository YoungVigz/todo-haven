import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-haven-api.onrender.com',
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