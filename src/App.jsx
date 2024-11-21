import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Pass from './Components/Other/Pass'
import Registration from './Components/Other/Registration'
import EventDetails from './Components/Other/EventDetails'
import Signup from './Components/Other/Signup'
import Contact from './Components/Other/Contact'


const App = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/passes' element={<Pass/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/event' element = {<EventDetails/>}/>
      <Route path ='/signup' element={<Signup/>}/>
      <Route path ='contact/' element={<Contact/>}/>
      
      </Routes>

    </div>
  )
}

export default App
