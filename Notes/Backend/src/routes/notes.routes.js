import { Router } from "express";

import { getAllNotes, createNotes, deleteNotes, updateNotes } from "../controllers/notes.controllers.js";

const router = new Router()


router.get("/", getAllNotes)
router.post("/", createNotes)
router.put("/:id", updateNotes)
router.delete("/:id", deleteNotes)

export default router