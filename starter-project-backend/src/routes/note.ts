import express from 'express';
import { getAllNotes,addNote } from '../controllers/note';
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", addNote);

export default router;