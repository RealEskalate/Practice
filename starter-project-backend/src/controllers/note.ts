import { Request, Response } from 'express';
import models from '../models';
import NoteDocuemnt , { INoteDocument } from '../models/note';

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const note: INoteDocument | null = await models.Note.findById(req.params.id);

        res.status(200).json({ data: note });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

/**
 * Get all notes
 * @route GET /note
 */
export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const notes : INoteDocument[] = await models.Note.find();
        res.status(200).json({data: notes});
    } catch (e){
        console.error(e);
        res.status(500).send();
    }
};

export const addNote = async (req: Request, res : Response) => {
    const note = new models.Note({
        title: req.body.title,
        detail: req.body.detail
    });

    try {        
        await note.save();
        res.status(201).json({ data: note });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}