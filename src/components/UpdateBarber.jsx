import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

const UpdateBarber = () => {

  const navigate = useNavigate()

  const [updateBarber, setUpdateBarber] = useState({
    name: '',
    bio: '',
  })

  const handleChange = (e) => {
    setUpdateBarber({...updateBarber, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.put('/barbers/', updateBarber)
    navigate('/barbers')
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          value={updateBarber.name}
        />
        <input 
          onChange={handleChange}
          type="text" 
          name="bio" 
          value={updateBarber.bio}
        />
        <button type="submit">
        Submit
      </button>
      </form> 
    </div>
  )
}

export default UpdateBarber