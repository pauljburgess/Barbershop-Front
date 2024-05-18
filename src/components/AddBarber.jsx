import { useState } from "react"
import API from "../services/api"
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
    await API.post('/barbers', newBarber)
    navigate('/barbers')
  }

  return (
    <div className="content">
      <h1 className="roboto-flex-300">New Barber</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          value={newBarber.name}
        />
        <br />
        <label htmlFor="bio">Short Bio</label>
        <br />
        <input 
          onChange={handleChange}
          type="textarea" 
          name="bio" 
          value={newBarber.bio}
        />
        <br />
        <button type="submit" className="book">
        Submit
      </button>
      </form> 
    </div>
  )
}




export default AddBarber