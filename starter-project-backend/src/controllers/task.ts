import { Request, Response } from 'express';
import models from '../models';

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await models.Task.find();

        res.status(200).json({ data: tasks });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}
export const postTask = async (req: Request, res: Response) => {

    const task = new models.Task({
        title: req.body.title,
        isComplete: req.body.isComplete
    });

    try{
        const newTask = await task.save();
        res.status(201).json({data : newTask});
    }catch (e){
        console.error(e);
        res.status(400).end();
    }

}