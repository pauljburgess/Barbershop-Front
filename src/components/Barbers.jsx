import axios from 'axios'
import {useState, useEffect} from 'react'




const Barbers = () => {
	
	const [barbers, setBarbers] = useState([])

	const fetchBarbers = async () => {
		let response = await axios.get("https://mernsbbs-c43dae5036eb.herokuapp.com/barbers")
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