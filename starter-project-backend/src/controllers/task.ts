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