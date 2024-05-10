import { NavLink, Link } from "react-router-dom"  

const Nav = () => {

  const navToggle = document.querySelector('#nav-toggle');
  
  function onClick (){
    alert('Clicked!')

  }
  
  navToggle.addEventListener("click", onClick)



  return (
    <div>
      <div id="nav-toggle"> 
        <img src="/images/Hamburger_icon.png" alt="" />
      
      </div>


      <div className="nav-cont">
          <Link to="/"><div className="nav-link">Home</div></Link>
          <Link to="/"><div className="nav-link">Our Barbers</div></Link>
          <Link to="/"><div className="nav-link">Services</div></Link>
          <Link to="/"><div className="nav-link">Book Appt</div></Link>
      </div>
    </div>
  )
}

export default Nav  