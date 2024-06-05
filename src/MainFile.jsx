import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import IndexStrategy from './Components/HeroHome/Strategies'

const MainFile = () => {
  return (
    <div className='bg-gradient-to-b to-[#026874] from-[#013A40] w-full h-[80vh]'>
      <Navbar/>
      <IndexStrategy/>
    </div>
  )
}

export default MainFile
