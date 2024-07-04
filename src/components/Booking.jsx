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

  return (
    <div>
      <h1>Booking for {booking.name}</h1>
      
    </div>
  )
}

export default Booking