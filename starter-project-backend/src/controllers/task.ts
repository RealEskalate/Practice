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

export const putTask = async (req: Request, res: Response) => {
    try {
        const { title, isComplete } = req.body;
        const id = req.params.id;

        if (typeof title === 'undefined') throw Error(`"title" has to be defined`)
        if (typeof isComplete === 'undefined') throw Error(`"isComplete" has to be defined`)

        const taskObj = {
            title,
            isComplete
        };

        const task = await models.Task.findOneAndUpdate({ _id: id }, taskObj,
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            })

        res.status(201).json({ data: task });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
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