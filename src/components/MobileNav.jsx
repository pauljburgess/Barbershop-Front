import { useState, useEffect } from "react"
import Nav from "./Nav"

const MobileNav = ({user}) => {

  const [click, setClick] = useState(false)

  const Hamburger = <img className="burger-menu" src='../images/Hamburger_icon.png' onClick={() => setClick(!click)}/>

	const onClick = () => {
		setClick(!click)
	}

  return (
    <div className="mobile-nav">
			{Hamburger}
      {click && <Nav onClick={onClick} user={user}/>}
    </div>
  )
}

export default MobileNav