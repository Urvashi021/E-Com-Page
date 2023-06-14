import React from 'react'
import Navigation from './Components/Navigation.jsx'
import Main from './Components/Main.jsx'
import Hero from './Components/Hero.jsx'
import Carousel from './Components/Carousel.jsx'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navigation/>
      <Hero/>
      <Carousel/>
      <Main/>

    </div>
  )
}

export default App