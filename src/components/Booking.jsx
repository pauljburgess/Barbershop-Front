import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const Booking = () => {

  const { id } = useParams()

  const [booking, setBooking] = useState({})

  const fetchBooking = async () => {
    let response = await API.get(`/bookings/${id}`)
    console.log(response)
    setBooking(response.data)
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