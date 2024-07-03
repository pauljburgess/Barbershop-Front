import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const Booking = () => {

  const { id } = useParams()

  const [booking, setBooking] = useState({})

  const fetchBooking = async () => {
    let response = await API.get(`/bookings`)
    console.log(response)
    let result = response.data.filter((booking) => {
      return booking.appointment[0] == id
    })
    setBooking(result)
  }

  useEffect(() => {
    fetchBooking()
  }, [])

  return (
    <div>
      <h1>Booking for </h1>

    </div>
  )
}

export default Booking