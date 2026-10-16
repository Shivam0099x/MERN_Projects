import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const HomePage = ({setFormData, setIsUpdated}) => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes")
      setNotes(res.data.allNotes)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?")
    if (!confirmDelete) return

    try {
      await axios.delete(`http://localhost:3000/notes/${id}`)

      setNotes((prev) => prev.filter((note) => note._id !== id))
    } catch (err) {
      console.error(err)
      alert("Failed to delete note")
    }
  }

  const handleUpdate =(elem)=>{
      setFormData(elem)
      setIsUpdated(elem)
      navigate("/form")
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">My Notes</h1>
            <p className="mt-1 text-sm text-slate-400">
              {notes.length} {notes.length === 1 ? 'note' : 'notes'} available
            </p>
          </div>

          <NavLink
            to="/form"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white 
                       transition hover:bg-blue-500 focus:outline-none focus:ring-2 
                       focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            + New Note
          </NavLink>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500" />
          </div>
        )}

        {/* Empty State */}
        {!loading && notes.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed 
                          border-slate-700 bg-slate-800/40 py-20 text-center">
            <div className="mb-4 text-5xl">📝</div>
            <h3 className="text-lg font-semibold text-white">No notes yet</h3>
            <p className="mt-1 text-sm text-slate-400">Create your first note to get started</p>
          </div>
        )}

        {/* Notes Grid */}
        {!loading && notes.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((elem) => (
              <div
                key={elem._id}
                className="group flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/70 
                           p-5 shadow-lg backdrop-blur-sm transition-all duration-200 
                           hover:-translate-y-1 hover:border-blue-500/60 hover:bg-slate-800 
                           hover:shadow-xl hover:shadow-blue-500/10"
              >
                <h2 className="mb-2 line-clamp-1 text-lg font-semibold text-white 
                               group-hover:text-blue-400 transition-colors">
                  {elem.title}
                </h2>
                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {elem.description}
                </p>

                {/* Card Footer with Actions */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-700/60 pt-3">
                  <span className="text-xs text-slate-500">Note #{elem._id}</span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={()=>handleUpdate(elem)}
                      className="rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-medium 
                                 text-amber-400 transition hover:bg-amber-500/20 
                                 hover:text-amber-300 focus:outline-none focus:ring-2 
                                 focus:ring-amber-400/50"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(elem._id)}
                      className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium 
                                 text-red-400 transition hover:bg-red-500/20 
                                 hover:text-red-300 focus:outline-none focus:ring-2 
                                 focus:ring-red-400/50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage