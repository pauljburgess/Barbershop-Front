import { useState, useEffect } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

const AddBooking = () => {

  const navigate = useNavigate()

  const [newBooking, setNewBooking] = useState({
    name: '',
    phone: '',
    barber: '',
    appointment: '',
    service: '',
  })

  const handleChange = (e) => {
    setNewBooking({...newBooking, [e.target.name]: e.target.value})
  }
  
  const [barbers, setBarbers] = useState([])

	const fetchBarbers = async () => {
		let response = await API.get("/barbers")
		setBarbers(response.data)
	}

  const [services, setServices] = useState([])

  const fetchServices = async () => {
    let response = await API.get('/services')
    setServices(response.data)
  }

  const [appointments, setAppointments] = useState([])

  const fetchAppointments = async () => {
    let response = await API.get('/appointments')
    setAppointments(response.data)
  }

  useEffect(() => {
		fetchBarbers(),
    fetchServices(),
    fetchAppointments()
	}, [newBooking.barber])


  const handleSubmit = async (e) => {
    console.log(newBooking)
    e.preventDefault()
    await API.post('/bookings', newBooking)
    navigate('/')
  }

  return (
    <div className='content'>
      <h1>Book your Appointment</h1>

      <form onSubmit={handleSubmit}>

        <input 
          onChange={handleChange}
          type="text"
          name="name"
          value={newBooking.name}
        />

        <br />

        <input 
          onChange={handleChange}
          type="text"
          name="phone"
          value={newBooking.phone}
        />

        <br />

        <select name='barber' onChange={handleChange}>
          <option value="" ></option>
          {barbers.map(barber =>
            <option key={barber._id} value={barber._id}>{barber.name}</option>
          )}
        </select>

        <br />

        <select name='appointment' onChange={handleChange}>
          <option value="" ></option>
          {appointments.map(appointment =>
            <option key={appointment._id} value={appointment._id}>{appointment.date}</option>
          )}
        </select>

        <br />

        <select name='service' onChange={handleChange}>
          <option value="" ></option>
          {services.map(service =>
            <option key={service._id} value={service._id}>{service.name}</option>
          )}
        </select>
        
        <br />

        <button type="submit">Book</button>

      </form>

    </div>
  )
}

export default AddBooking