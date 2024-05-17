import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='content'>
        <h1 id="welcome" className="roboto-flex-300">Welcome!</h1>

        <p id="greeting" >Browse a list of our barbers and services above, or go straight to booking your appointment if you know who and what you'd like. We look foward to seeing you!</p>


        <Link to="/bookings/add"><button id="book-here" className="roboto-flex-300">Book now!</button></Link>
    </div>
  )
}

export default Home