import { useState, useEffect } from "react"
import Nav from "./Nav"

const MobileNav = () => {

  const [click, setClick] = useState(false)

  const Hamburger = <img className="burger-menu" src='../images/Hamburger_icon.png' onClick={() => setClick(!click)}/>  

  return (
    <div className="mobile-nav">
			{Hamburger}
      {click && <Nav />}
    </div>
  )
}

export default MobileNav