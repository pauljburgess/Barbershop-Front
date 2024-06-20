import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'
const Schedule = () => {

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
    console.log(bookedResults)
    setBookedAppointments(bookedResults)
  }

  useEffect(() => {
    fetchBarber()
    fetchAppointments()
  }, [])

  return (
    <div className='content'>
      <h1>{barber.name}'s Schedule</h1>
      <h2>Booked Appointments:</h2>
      {bookedAppointments.map(appt => (
        <div key={appt._id}>
          <p><a href="">{appt.date.slice(0,10)} - {appt.time}</a></p>
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