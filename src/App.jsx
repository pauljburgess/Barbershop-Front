import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'

function App() {

  return (
    <div>
      <Header />
      <DesktopNav />
      <MobileNav />
    
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>

        </Routes>


      </main>
      <footer></footer>
    </div>
  )
}

export default App
