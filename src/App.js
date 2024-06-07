import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import EndFooter from './Components/Footer/EndFooter';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <Routing /> */}
      <Navbar/>
      <Home/>
      <EndFooter/>
    </div>
  )
}

export default App
