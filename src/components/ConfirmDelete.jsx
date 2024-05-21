import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../services/api'


const ConfirmDelete = () => {

  let { id } = useParams()

	const navigate = useNavigate()
	
	const [barber, setBarber] = useState([])

	const fetchBarber = async () => {
		let response = await API.get(`/barbers/${id}`)
		setBarber(response.data)
	}

	useEffect(() => {
		fetchBarber()
	}, [])

  const onClick = async(id) => {
		await API.delete(`/barbers/${id}`)
		fetchBarber()
		navigate('/barbers')
	}

  const onCancel = () => {
    navigate('/barbers')
  }

  return (
    <div className='content'>
      <h1 className='roboto-flex-300'>Delete {barber.name} ?</h1>
      <button onClick={() => onClick(barber._id)}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  )
}

export default ConfirmDelete