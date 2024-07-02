import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

const Schedule = () => {

  const navigate = useNavigate()

  let { id } = useParams()

  const [barber, setBarber] = useState({})

  const fetchBarber = async () => {
    let response = await API.get(`/barbers/${id}`)
    setBarber(response.data)
  }

  const [unbookedAppointments, setUnbookedAppointments] = useState([])
  const [bookedAppointments, setBookedAppointments] = useState([])

  const fetchAppointments = async () => {
    let response = await API.get('/appointments')
    let result = response.data.filter((appt) => {
      return appt.barber[0] === id && appt.booked === false
    })
    setUnbookedAppointments(result)
    let bookedResults = response.data.filter((appt) => {
      return appt.barber[0] === id && appt.booked === true
    })
    setBookedAppointments(bookedResults)
  }

  useEffect(() => {
    fetchBarber()
    fetchAppointments()
  }, [])

  const onClick = (id) => {
    navigate(`/barbers/appointments/${id}`)
  }

  return (
    <div className='content'>
      <h1>{barber.name}'s Schedule</h1>
      <h2>Booked Appointments:</h2>
      {bookedAppointments.map(appt => (
        <div key={appt._id}>
          <p onClick={() => onClick(appt._id)} >{appt.date.slice(0,10)} - {appt.time}</p>
        </div>
      ))}

      <h2>Available Appointments:</h2>
      {unbookedAppointments.map(appt => (
        <div key={appt._id}>
          <p>{appt.date.slice(0,10)} - {appt.time}</p>
        </div>
      ))}
    </div>
  )
}

export default Schedule