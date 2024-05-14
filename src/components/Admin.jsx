import { SignInAdmin } from "../services/Auth"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom" 

const Admin = (props) => {

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({email: '', password: ''})

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInAdmin(formValues)
    setFormValues({email: '', password: ''})
    props.setUser(payload)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="your@emailhere.com"
          value={formValues.email}
          required
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
          required
          />

        <button disabled={!formValues.password || !formValues.email}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Admin