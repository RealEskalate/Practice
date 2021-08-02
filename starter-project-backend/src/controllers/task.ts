import task, { ITask } from '../models/task'
import { Request, Response } from 'express';
import models from '../models';

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await models.Task.find();
        return res.status(200).json(tasks);
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}