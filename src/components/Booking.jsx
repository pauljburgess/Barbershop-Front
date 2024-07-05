import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const Booking = () => {

  const { id } = useParams()

  const [booking, setBooking] = useState({})

  const fetchBooking = async () => {
    let response = await API.get(`/bookings`)
    let result = response.data.filter((booking) => {
      return booking.appointment[0] == id
    })
    console.log(result[0])
    setBooking(result[0])
  }

  useEffect(() => {
    fetchBooking()
  }, [])

  const [service, setService] = useState()

  const fetchService = async () => {
    let response = await API.get(`/services/${booking.service[0]}`)
    console.log(response.data.name)
    setService(response.data.name)
  }

  useEffect(() => {
    if (booking){
      fetchService()
    }
  }, [booking])

  return (
    <div className='content'>
      <h1>Booking for {booking.name}</h1>
      <h2>We're doing a {service}</h2>
      <h3>{booking.phone}</h3>
    </div>
  )
}

export default Booking