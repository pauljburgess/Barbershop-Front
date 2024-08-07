import './App.css'
import API from './services/api'
import { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Home from './components/Home'
import Header from './components/Header'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'
import Barbers from './components/Barbers'
import Admin from './components/Admin'
import AddBarber from './components/AddBarber'
import Services from './components/Services'
import AddService from './components/AddService'
import AddAppointment from './components/AddAppointment'
import UpdateBarber from './components/UpdateBarber'
import AddBooking from './components/AddBooking'
import Confirmation from './components/Confirmation'
import Schedule from './components/Schedule'
import ConfirmDelete from './components/ConfirmDelete'
import Booking from './components/Booking'


function App() {

  const [user, setUser] = useState(null)

  const logOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async (token) => {
    const user = await CheckSession(token)
    setUser(user)
  }

  useEffect(() =>{
    const token = localStorage.getItem('token')
    if(token){
        checkToken(token)
      }
  }, [])
  

  return (
    <div>
      <Header />
      <DesktopNav user={user} logOut={logOut}/>
      <MobileNav user={user} logOut={logOut}/>
    
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/barbers' element={ <Barbers user={user}/>} />
          <Route path='/signin' element={ <Admin setUser={setUser} />} />
          <Route path='/barbers/add' element={ <AddBarber />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/add' element={<AddService />} />
          <Route path='/appointments/add' element={<AddAppointment />} />
          <Route path='/barbers/update/:id' element={<UpdateBarber />} />
          <Route path='/bookings/add' element={<AddBooking />} />
          <Route path='/bookings/:id' element={<Confirmation />}/>
          <Route path='/barbers/schedule/:id' element={<Schedule />}/>
          <Route path='/barbers/delete/:id' element={<ConfirmDelete />} />
          <Route path='/barbers/appointments/:id'element={ <Booking />} /> 
        </Routes>


      </main>
      <footer></footer>
    </div>
  )
}

export default App
