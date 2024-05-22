import { useState, useEffect } from "react"
import Nav from "./Nav"

const MobileNav = ({user, logOut}) => {

  const [click, setClick] = useState(false)

  const Hamburger = <img className="burger-menu" src='../public/images/hamburger_icon.png' onClick={() => setClick(!click)}/>

	const onClick = () => {
		setClick(!click)
	}

  return (
    <div className="mobile-nav">
			{Hamburger}
      {click && <Nav onClick={onClick} user={user} logOut={logOut}/>}
    </div>
  )
}

export default MobileNav