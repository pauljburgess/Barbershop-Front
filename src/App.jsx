import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <div>
      <nav></nav>
      <main>
        <Routes>
          <Route path='/' element={ <Home />}
          />

        </Routes>


      </main>
      <footer></footer>
    </div>
  )
}

export default App
