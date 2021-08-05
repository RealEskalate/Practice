import express from 'express';
import { getAllNotes, getNoteById } from '../controllers/note';
const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

export default router;