import Note from "../models/notes.model.js"
export const getAllNotes = async (req,res)=>{
    try {
        const allNotes = await Note.find({})

        res.status(200).json({
            success:true,
            message : `Your All Notes`,
            allNotes
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in getAllNotes Controller ${error}`
        })
    }
}


export const createNotes = async (req,res)=>{
    try {

      const body = req.body

        const newNote = await Note.create(body)

        res.status(200).json({
            success:true,
            message : `Notes create successfully...`,
            newNote
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in Create Note Controller ${error}`
        })
    }
}


export const deleteNotes = async (req,res)=>{
    try {

        const id = req.params.id

        const note = await Note.findByIdAndDelete(id)

        if(!note){
            return res.status(500).json({
            success:false,
            message : `Error while deleting user ${error}`
        })
        }

        res.status(200).json({
            success:true,
            message : `Note Deleted Successfully...`
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in getAllNotes Controller ${error}`
        })
    }
}


export const updateNotes = async (req,res)=>{
    try {

        const id = req.params.id

        const body = req.body

        const note = await Note.findByIdAndUpdate(id, body, {
            new: true
        })

        if(!note){
            return res.status(500).json({
            success:false,
            message : `Error in Update Controller ${error}`
        })
        }

        res.status(200).json({
            success:true,
            message : `Note update successfully`,
            note
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message : `Error in getAllNotes Controller ${error}`
        })
    }
}