import { useState, useEffect } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"


const AddAppointment = () => {

  const navigate = useNavigate()

  const [newAppointment, setNewAppointment] = useState({
    barber: '',
    date: '',
    time: '',
    booked: 'false',
  })

  const handleChange = (e) => {
    setNewAppointment({...newAppointment, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.post('/appointments', newAppointment)
    setNewAppointment({
      barber: '',
      date: '',
      time: '',
      booked: 'false',
    })
    navigate('/appointments/add')
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
    <div className="content">
      <h1 className="roboto-flex-300">Add appointment</h1>
       <form onSubmit={handleSubmit}>

        <label htmlFor="barber">Barber:</label>
        <br />
        <select name='barber' onChange={handleChange}>
          <option value="" ></option>
          {barbers.map(barber =>
            <option key={barber._id} value={barber._id}>{barber.name}</option>
          )}
        </select>

          <br />

        <label htmlFor="date">Date:</label>
        <br />
        <input 
          onChange={handleChange}
          type="date" 
          name="date" 
          value={newAppointment.date}
        />

        <br />

        <label htmlFor="date">Time (military):</label>
        <br />   
        <input 
          onChange={handleChange}
          type="number" 
          name="time" 
          value={newAppointment.time}
        />
        <br />
        <button type="submit" className="book">
        Add appointment
      </button>
      <br />
      
      </form> 
    </div>
  )
}

export default AddAppointment