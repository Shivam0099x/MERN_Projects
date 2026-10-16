import React, { useState } from 'react'
import Form from './components/Form'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const [isUpdated, setIsUpdated] = useState(null)

  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage setFormData={setFormData} setIsUpdated= {setIsUpdated} isUpdated={isUpdated} />} />
        <Route path='/form' element={<Form formData={formData} setFormData={setFormData} setIsUpdated= {setIsUpdated} isUpdated={isUpdated} />} />
      </Routes>
      {/* <Form/> */}
    </div>
  )
}

export default App
