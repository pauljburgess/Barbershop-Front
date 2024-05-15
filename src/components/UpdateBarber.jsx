import { useState, useEffect } from "react"
import API from "../services/api"
import { useNavigate, useParams } from "react-router-dom"

const UpdateBarber = () => {

  let { id } = useParams()

  const navigate = useNavigate()

  const [updateBarber, setUpdateBarber] = useState({})

  const fetchBarber = async () => {
    let response = await API.get(`/barbers/${id}`)
    setUpdateBarber(response.data)
  }

  useEffect(() => {
    fetchBarber()
  }, [])


  const handleChange = (e) => {
    setUpdateBarber({...updateBarber, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.put(`/barbers/${id}`, updateBarber)
    navigate('/barbers')
  }

  return (
    <div className="content">
       <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          name="name"
          placeholder={updateBarber.name}
          defaultValue={updateBarber.name}
        />
        <br />
        <br />
        <input 
          onChange={handleChange}
          type="textarea" 
          name="bio"
          placeholder={updateBarber.bio}
          defaultValue={updateBarber.bio}
        />
        <br />
        <br />
        <button type="submit">
        Submit
      </button>
      </form> 
    </div>
  )
}

export default UpdateBarber