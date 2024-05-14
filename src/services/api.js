import Axios from "axios";

export const BASE_URL = 'http://localhost:4000'

const Admin = Axios.create({ baseURL: BASE_URL})

Admin.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Admin