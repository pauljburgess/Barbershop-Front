import { NavLink, Link } from "react-router-dom"  

const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/">Our Barbers</Link>
        <Link to="/">Services</Link>
        <Link to="/">Book Appt</Link>
    </div>

  )
}

export default Nav