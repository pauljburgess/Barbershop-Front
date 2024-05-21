import API from '../services/api'
import { useState, useEffect } from 'react'

const Services = () => {

  const [services, setServices] = useState([])

  const fetchServices = async () => {
    let response = await API.get('/services')
    setServices(response.data)
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div className='content'>
      <h1 className='roboto-flex-300'>Our Services</h1>
      {services.map(service => (
        <div key={service._id} className='card'>
          <h4>{service.name} - ${service.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default Services