import express from 'express';

import {deleteNoteById,  getAllNotes, addNote } from '../controllers/note';

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", addNote);

router.delete("/delete/:id", deleteNoteById);

export default router;