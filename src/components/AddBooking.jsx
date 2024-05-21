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

  const [bookedAppt, setBookedAppt] = useState({
    barber: '',
    date: '',
    time: '',
    booked: 'true',
  })
  
  const handleChange = (e) => {
    setNewBooking({...newBooking, [e.target.name]: e.target.value})
  }

  const handleBooking = async () => {
    let response = await API.get(`/appointments/${newBooking.appointment}`)
    setBookedAppt({
      barber: response.data.barber[0],
      date: response.data.date,
      time: response.data.time,
      booked: 'true',
    })
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
    let result = response.data.filter((appt) => {
      return appt.barber[0] === newBooking.barber && appt.booked === false
    })
    setAppointments(result)
  }

  useEffect(() => {
		fetchBarbers()
    fetchServices()
	}, [])
  
  useEffect(() => {
    if(newBooking.barber){
      fetchAppointments()
    }
  }, [newBooking.barber])

  useEffect(() => {
    if(newBooking.appointment){
      handleBooking()
    }
  }, [newBooking.appointment])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await API.post('/bookings', newBooking)
    await API.put(`/appointments/${newBooking.appointment}`, bookedAppt)
    navigate(`/bookings/${response.data._id}`)
  }

  return (
    <div className='content'>
      <h1 className="roboto-flex-300">Book your Appointment</h1>

      <form onSubmit={handleSubmit}>
        <label for="name">This appointment is for:</label>
        <br />
        <input className="input-box"
          onChange={handleChange}
          type="text"
          name="name"
          value={newBooking.name}
        />

        <br />
        <label htmlFor="phone">Your phone # <br /> (in case we have to cancel)</label>
        <br />
        <input 
          onChange={handleChange}
          type="text"
          name="phone"
          value={newBooking.phone}
        />

        <br />
        <label htmlFor="barber">Pick your barber:</label>
        <br />
        <select name='barber' onChange={handleChange}>
          <option value="" ></option>
          {barbers.map(barber =>
            <option key={barber._id} value={barber._id}>{barber.name}</option>
          )}
        </select>

        <br />
        <label htmlFor="appointment">Select an appointment:</label>
        <br />
        <select name='appointment' onChange={handleChange}>
          <option value="" ></option>
          {appointments.map(appointment =>
            <option key={appointment._id} value={appointment._id}>{appointment.date.slice(0,10)} - {appointment.time}</option>
          )}
        </select>

        <br />
        <label htmlFor="service">Choose your service:</label>
        <br />
        <select name='service' onChange={handleChange}>
          <option value="" ></option>
          {services.map(service =>
            <option key={service._id} value={service._id}>{service.name}</option>
          )}
        </select>
        
        <br />

        <button type="submit" className="book">Book</button>

      </form>

    </div>
  )
}

export default AddBooking