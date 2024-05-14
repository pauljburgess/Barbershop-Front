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
      <h2>Our Services</h2>
      {services.map(service => (
        <div>
          <h4>{service.name} - ${service.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default Services