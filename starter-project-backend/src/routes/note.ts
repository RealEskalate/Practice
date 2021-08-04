import express from 'express';
import { deleteNoteById , getAllNotes } from '../controllers/note';
const router = express.Router();

router.get("/", getAllNotes);

router.delete("/delete/:id", deleteNoteById);

export default router;