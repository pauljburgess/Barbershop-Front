import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const Appointment = () => {

  const { id } = useParams()


  return (
    <div>
      <h1>Appointment</h1>

    </div>
  )
}

export default Appointment