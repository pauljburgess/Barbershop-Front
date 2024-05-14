import axios from "axios";

export const BASE_URL = 'https://mernsbbs-c43dae5036eb.herokuapp.com'

const Admin = Axios.create({ baseURL: BASE_URL})

export default Admin