import { Request, Response } from 'express';
import models from '../models';
import { INoteDocument } from '../models/note';

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const note: INoteDocument | null = await models.Note.findById(req.params.id);

        res.status(200).json(note);
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
        res.status(200).json(notes);
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
};

/**
 * Delete Note By Id
 * @route DELETE /delete/:id
 */
 export const deleteNoteById = async (req: Request, res: Response) => {
    try{ 
        const result = await models.Note.findByIdAndDelete(req.params.id).exec();
        res.status(200).json({result: result});
    }catch(e){
        console.log(e);
        res.status(400).send();
    }
};

export const putNote = async (req: Request, res: Response) => {
    try {
        const { title, detail } = req.body;
        const id = req.params.id;

        if (typeof title === 'undefined') throw Error(`"title" has to be defined`)
        if (typeof detail === 'undefined') throw Error(`"isComplete" has to be defined`)

        const noteObj = {
            title,
            detail
        };

        const note = await models.Note.findOneAndUpdate({ _id: id }, noteObj,
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            })

        res.status(201).json({ data: note });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
}