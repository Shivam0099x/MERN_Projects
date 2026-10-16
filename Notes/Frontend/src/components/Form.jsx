import React, { useState } from 'react';
import axios from "axios"

const Form = () => {

    const [formData, setFormData] = useState({
        title : "",
        description : ""
    })


    const handleChange = (e)=>{
        const {name, value} = e.target 
        setFormData({...formData, [name] : value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(formData)

        const res = await axios.post("http://localhost:3000/notes", formData)

        setFormData({
            title : "",
            description : ""
        })
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6" onSubmit={(e)=>handleSubmit(e)} >
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Create New Note</h2>
          <p className="text-sm text-gray-500 mt-1">Fill in the details below</p>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name= "title"
            onChange={(e)=>handleChange(e)}
            placeholder="Enter a title..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition duration-200"
            value={formData.title}
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="description" 
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            name='description'
            placeholder="Enter a description..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg 
                     transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Note
        </button>
      </form>
    </div>
  );
};

export default Form;