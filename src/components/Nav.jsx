import { NavLink, Link } from "react-router-dom"  

const Nav = ({onClick}) => {

  const navToggle = document.querySelector('#nav-toggle');
  
  
  return (
    <div>
      <div className="nav-cont">
          <Link to="/"><div className="nav-link" onClick={onClick}>Home</div></Link>
          <Link to="/barbers"><div className="nav-link" onClick={onClick}>Our Barbers</div></Link>
          <Link to="/"><div className="nav-link" onClick={onClick}>Services</div></Link>
          <Link to="/"><div className="nav-link" onClick={onClick}>Book Appt</div></Link>
          <Link to="/signin"><div className="nav-link" onClick={onClick}>Admin</div></Link>
      </div>
    </div>
  )
}

export default Nav  