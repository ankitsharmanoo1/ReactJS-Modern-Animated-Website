// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage/>
      <Marquee/>
    </div>
  )
}

export default App