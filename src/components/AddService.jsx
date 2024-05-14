import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

const AddService = () => {

  const navigate = useNavigate()

  const [newService, setNewService] = useState({
    name: '',
    price: '',
  })

  const handleChange = (e) => {
    setNewService({...newService, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.post('/services', newService)
    navigate('/services')
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          value={newService.name}
        />
        <input 
          onChange={handleChange}
          type="number" 
          name="price" 
          value={newService.price}
        />
        <button type="submit">
        Submit
      </button>
      </form> 
    </div>
  )
}

export default AddService