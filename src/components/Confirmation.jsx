import API from '../services/api'
import { useParams } from "react-router-dom"
import { useState, useEffect} from 'react'

const Confirmation = () => {

  let { id } = useParams()

  const [newConfirmation, setNewConfirmation] = useState(null)

  const fetchConfirmation = async () => {
    let response = await API.get(`/bookings/${id}`)
    setNewConfirmation(response.data)
    
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

  useEffect(() => {
    if (newConfirmation){
      fetchBarber()
      fetchAppointment()
      fetchService()
    }
  }, [newConfirmation])

  return (
    <div className='content'>
      <h1 className='roboto-flex-300'>Thank you!</h1>
      { !!newConfirmation && <p className="paragraph">This confirms that an appointment for a <strong>{service}</strong> has been booked for <strong>{newConfirmation.name}</strong> with <strong>{barber}</strong> on <strong>{String(appointment.date).slice(0,10)}</strong> at <strong>{appointment.time}</strong>.</p> }
      
      <h3>We recommend you take a <span className='underline'>screenshot</span> of this confirmation. See you soon!</h3>
    </div>
  )
}

export default Confirmation