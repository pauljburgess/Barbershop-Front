import Admin from './api'

export const SignInAdmin = async (data) => {
    try{
			let response = await Admin.post('/auth/login', data)
			localStorage.setItem('token', response.data.token)
			return response.data.user
    } catch (error) {
      throw error  
    }
}

export const RegisterAdmin = async (data) => {
	try {
		const response = await Admin.post('/auth/register', data)
		return response.data
	} catch (error){
		throw error
	}
}

export const CheckSession = async () => {
	try {
		const response = await Admin.get('/auth/session')
		return response.data
	} catch (error) {
		throw error
	} 
}

