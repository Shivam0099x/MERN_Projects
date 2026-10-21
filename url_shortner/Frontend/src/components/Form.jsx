import React, { useState } from "react"

const Form = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
   
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