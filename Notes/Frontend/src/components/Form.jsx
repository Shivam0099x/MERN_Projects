import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Form = ({formData, setFormData, setIsUpdated, isUpdated}) => {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    console.log(isUpdated)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            if(isUpdated){
               await axios.put(`http://localhost:3000/notes/${isUpdated._id}`, formData)
               setIsUpdated(null)
            }else{
                await axios.post("http://localhost:3000/notes", formData)
            }


            setFormData({ title: "", description: "" })
            navigate("/")
        } catch (err) {
            console.error(err)
            alert("Failed to create note")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-10">
            <div className="mx-auto max-w-xl">

                {/* Back link */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-1.5 text-sm text-slate-400 
                               transition hover:text-white"
                >
                    ← Back
                </button>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-8 
                               shadow-xl backdrop-blur-sm space-y-6"
                >
                    {/* Header */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Create New Note</h2>
                        <p className="mt-1 text-sm text-slate-400">Fill in the details below</p>
                    </div>

                    {/* Title Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-slate-300"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter a title..."
                            required
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 
                                       text-white placeholder-slate-500 transition duration-200 
                                       focus:border-transparent focus:outline-none focus:ring-2 
                                       focus:ring-blue-500"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-slate-300"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter a description..."
                            required
                            className="w-full resize-none rounded-lg border border-slate-700 
                                       bg-slate-900/60 px-4 py-2.5 text-white placeholder-slate-500 
                                       transition duration-200 focus:border-transparent 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-300 
                                       transition hover:bg-slate-700/60 hover:text-white 
                                       focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white 
                                       shadow-md shadow-blue-500/30 transition hover:bg-blue-500 
                                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                                       focus:ring-offset-2 focus:ring-offset-slate-800 
                                       disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? 'Creating...' : 'Create Note'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;