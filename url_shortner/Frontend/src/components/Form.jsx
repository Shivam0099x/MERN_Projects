import React, { useState } from "react"
import axios from "axios"

const Form = () => {

    const [input, setInput] = useState("")
    // const [url, setUrl] = useState(null)

    const shortUrl = async ()=>{
    const res = await axios.post("http://localhost:5000/url", {url : input})
    console.log(res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setUrl(input)

    await shortUrl()

  }

  

  const handleCopy = async () => {
    try {
     
    } catch {

    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 space-y-4"
      >
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter your long URL
          </label>
          <input
            id="url"
            type="text"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition"
        >
         Shorten...
        </button>
      </form>
    </div>
  )
}

export default Form