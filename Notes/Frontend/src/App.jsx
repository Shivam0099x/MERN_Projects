import React from 'react'
import Form from './components/Form'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
      {/* <Form/> */}
    </div>
  )
}

export default App
