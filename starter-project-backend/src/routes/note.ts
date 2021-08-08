import express from 'express';

import {deleteNoteById,  getAllNotes, addNote } from '../controllers/note';

import { getNoteById } from '../controllers/note';
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", addNote);

router.delete("/delete/:id", deleteNoteById);

router.get("/:id", getNoteById);

export default router;