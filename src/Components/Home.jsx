import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Middle from './Middle'
import Footer from './Other/Footer'
import About from './Other/About'
const Home = () => {
  return (
    <div className='w-full h-[100%]'>
      <Navbar/>
      <Body/>
      {/* <Middle/> */}
      <About/>
      <Footer/>
    </div>
  )
}

export default Home