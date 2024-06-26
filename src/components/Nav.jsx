import { NavLink, Link } from "react-router-dom"  

const Nav = ({onClick, user, logOut}) => {

  //const navToggle = document.querySelector('#nav-toggle');

  let adminOptions
  
  const handleLogout = () => {
    logOut()
    onClick()
  }

  if (user) {
    adminOptions = (
      <div className="nav-cont">
          <Link to="/"><div className="nav-link" onClick={onClick}>Home</div></Link>
          <Link to="/barbers"><div className="nav-link" onClick={onClick}>Our Barbers</div></Link>
          <Link to="/barbers/add"><div className="nav-link" onClick={onClick}>Add Barber</div></Link>
          <Link to="/services"><div className="nav-link" onClick={onClick}>Services</div></Link>
          <Link to="/services/add"><div className="nav-link" onClick={onClick}>Add Service</div></Link>
          <Link to="/appointments/add"><div className="nav-link" onClick={onClick}>Add Appt</div></Link>
          <Link to="/bookings/add"><div className="nav-link" onClick={onClick}>Book Appt</div></Link>
          <Link to="/"><div className="nav-link" onClick={handleLogout}>Logout</div></Link>
      </div>
    )
  } 

  const publicOptions = (
    <div className="nav-cont">
          <Link to="/"><div className="nav-link" onClick={onClick}>Home</div></Link>
          <Link to="/barbers"><div className="nav-link" onClick={onClick}>Our Barbers</div></Link>
          <Link to="/services"><div className="nav-link" onClick={onClick}>Services</div></Link>
          <Link to="/bookings/add"><div className="nav-link" onClick={onClick}>Book Appt</div></Link>
          <Link to="/signin"><div className="nav-link" onClick={onClick}>Admin</div></Link>
      </div>
  )


  return (
    <div>
      { user ? adminOptions : publicOptions}
    </div>
  )
}

export default Nav  