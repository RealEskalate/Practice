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

/**
 * Delete Note By Id
 * @route DELETE /delete/:id
 */
 export const deleteNoteById = async (req: Request, res: Response) => {
    try{ 
        var c = req.params.id;
        const result = await models.Note.findByIdAndDelete(req.params.id).exec();
        res.status(200).json({result: result});
    }catch(e){
        console.log(e);
        res.status(400).send();
    }
};