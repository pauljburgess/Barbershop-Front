import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='content'>
        <h1>Welcome!</h1>

        <p>Welcome to Mern's Barbershop! When you atep through our door, you're greeted by the rich scent of sandalwood and the buzz of clippers and animated conversations. Our skilled barbers are steeped in tradition and yet attuned to the latest trends. Whether you're after a sharp fade, a traditional shave, or simply seeking a moment of relaxation amidst the whirlwind of life, Mern's is where you belong. </p>
        <Link to="/bookings/add"><button>Book Here!</button></Link>
    </div>
  )
}

export default Home