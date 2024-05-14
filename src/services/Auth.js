import API from './api'

export const SignInAdmin = async (data) => {
    try{
			let response = await API.post('/auth/login', data)
			localStorage.setItem('token', response.data.token)
			return response.data.user
    } catch (error) {
      throw error  
    }
}

export const RegisterAdmin = async (data) => {
	try {
		const response = await API.post('/auth/register', data)
		return response.data
	} catch (error){
		throw error
	}
}

export const CheckSession = async () => {
	try {
		const response = await API.get('/auth/session')
		return response.data
	} catch (error) {
		throw error
	} 
}

