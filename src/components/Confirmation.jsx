import API from '../services/api'
import { useParams } from "react-router-dom"
import { useState, useEffect} from 'react'

const Confirmation = () => {

  let { id } = useParams()

  const [newConfirmation, setNewConfirmation] = useState({})

  const fetchConfirmation = async () => {
    let response = await API.get(`/bookings/${id}`)
    setNewConfirmation(response.data)
    fetchBarber()
    fetchAppointment()
    fetchService()
  }

  useEffect(() => {
    fetchConfirmation()
  }, [])

  const [barber, setBarber] = useState('')

  const fetchBarber = async () => {
    let response = await API.get(`/barbers/${newConfirmation.barber[0]}`)
    setBarber(response.data.name)
  }

  const [appointment, setAppointment] = useState('')

  const fetchAppointment = async () => {
    let response = await API.get(`/appointments/${newConfirmation.appointment[0]}`)
    setAppointment(response.data)
  }

  const [service, setService] = useState('')

  const fetchService = async () => {
    let response = await API.get(`/services/${newConfirmation.service[0]}`)
    setService(response.data.name)
  }

  return (
    <div className='content'>
      <h1>Thank you!</h1>
      <p>This confirms that an appointment for a {service} has been booked for {newConfirmation.name} with {barber} on {appointment.date} at {appointment.time}.</p>
      <h3>We appreciate your business and recommend you take a screenshot of this confirmation.</h3>
    </div>
  )
}

export default Confirmation