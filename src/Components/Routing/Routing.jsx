import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Blogs from '../../Pages/Blogs'
import Feature from '../../Pages/Feature'
import Contact from '../../Pages/Contact'
import Navbar from '../Navbar/Navbar'
import EndFooter from '../Footer/EndFooter'

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/' element={<Blogs />} />
                <Route exact path='/' element={<Feature />} />
                <Route exact path='/' element={<Contact />} />
            </Routes>
            <EndFooter />

        </>
    )
}

export default Routing
