import { useState, useEffect } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"


const AddAppointment = () => {

  const navigate = useNavigate()

  const [newAppointment, setNewAppointment] = useState({
    barber: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    setNewAppointment({...newAppointment, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.post('/appointments', newAppointment)
    navigate('/')
  }

  const [barbers, setBarbers] = useState([])

	const fetchBarbers = async () => {
		let response = await API.get("/barbers")
		setBarbers(response.data)
	}

	useEffect(() => {
		fetchBarbers()
	}, [])

  return (
    <div>
       <form onSubmit={handleSubmit}>

        <select name='barber' onChange={handleChange}>
          <option value="" ></option>
          {barbers.map(barber =>
            <option key={barber._id} value={barber._id}>{barber.name}</option>
          )}
        </select>

        <input 
          onChange={handleChange}
          type="date" 
          name="date" 
          value={newAppointment.date}
        />
        <input 
          onChange={handleChange}
          type="number" 
          name="time" 
          value={newAppointment.time}
        />
        <button type="submit">
        Add
      </button>
      </form> 
    </div>
  )
}

export default AddAppointment