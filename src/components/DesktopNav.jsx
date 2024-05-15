import Nav from "./Nav"

const DesktopNav = ({user, logOut}) => {
  return (
    <div className="desktop-nav">
        <Nav user={user} logOut={logOut}/>
    </div>
  )
}

export default DesktopNav