import API from '../services/api'
import {useState, useEffect} from 'react'

const Barbers = () => {
	
	const [barbers, setBarbers] = useState([])

	const fetchBarbers = async () => {
		let response = await API.get("/barbers")
		setBarbers(response.data)
	}

	useEffect(() => {
		fetchBarbers()
	}, [])

  return (
    <div className='content'>
        <h1>Our Team</h1>
				{barbers.map(barber => (
					<div>
						<h3>{barber.name}</h3>
						<p>{barber.bio}</p>
					</div>
				))}
    </div>
  )
}

export default Barbers