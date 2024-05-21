import API from '../services/api'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Barbers = ({user}) => {

	const navigate = useNavigate()
	
	const [barbers, setBarbers] = useState([])

	const fetchBarbers = async () => {
		let response = await API.get("/barbers")
		setBarbers(response.data)
	}

	useEffect(() => {
		fetchBarbers()
	}, [])

	const onClick = async(id) => {
		navigate(`/barbers/delete/${id}`)
	}

	const whenClicked = (id) => {
		navigate(`/barbers/update/${id}`)
	}

	const clicked = (id) => {
		navigate(`/barbers/schedule/${id}`)
	}


  return (
    <div className='content'>
        <h1 className='roboto-flex-300'>Our Team</h1>
				{barbers.map(barber => (
					<div key={barber._id}>
						<h3>{barber.name}</h3>
						<p>{barber.bio}</p>
						{user ? 
							<div>
								<button className="schedule-button" onClick={() => clicked(barber._id)}>See {barber.name}'s Schedule</button>
								<br />
								<button className="update-button" onClick={() => whenClicked(barber._id)}>Update</button>
								<button className="delete-button" onClick={() => onClick(barber._id)}>Delete</button>
							</div>
							
						: ''}
					</div>
				))}
    </div>
  )
}

export default Barbers