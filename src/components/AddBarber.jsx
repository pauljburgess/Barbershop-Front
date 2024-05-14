import { useState } from "react"
import Admin from "../services/api"
import { useNavigate } from "react-router-dom"

const AddBarber = () => {

  const navigate = useNavigate()

  const [newBarber, setNewBarber] = useState({
    name: '',
    bio: '',
  })

  const handleChange = (e) => {
    setNewBarber({...newBarber, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Admin.post('/barbers', newBarber)
    navigate('/barbers')
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          value={newBarber.name}
        />
        <input 
          onChange={handleChange}
          type="text" 
          name="bio" 
          value={newBarber.bio}
        />
        <button type="submit">
        Submit
      </button>
      </form> 
    </div>
  )
}




export default AddBarber