import Axios from "axios";

export const BASE_URL = 'https://mernsbbs-c43dae5036eb.herokuapp.com/'

const API = Axios.create({ baseURL: BASE_URL})

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default API