import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
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
