import task, { ITask } from '../models/task';
import { Request, Response } from 'express';
import models from '../models';

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks: ITask[] = await models.Task.find();
        return res.status(200).json(tasks);
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const getFirstLTasks = async (req: Request, res: Response) => {
    try {
        const limit = req.query.count
        const firstLTasks: ITask[] = await models.Task.find().limit(Number(limit));
        return res.status(200).json(firstLTasks)
    } catch(e) {
        console.log(e);
        res.status(400).end();
    }
}
export const getCompletedTasks = async (req: Request, res: Response) => {
    try {
        const Completed_tasks: ITask[] = await models.Task.find({isComplete : true});
        return res.status(200).json(Completed_tasks);
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

    try {
        const newTask = await task.save();
        res.status(201).json({ data: newTask });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }

}

export const searchTasks = async (req: Request, res: Response) => {
    try {
        const keyword = req.params.keyword;
        const tasks: ITask[] = await models.Task.find({$text:{$search:keyword}});
        return res.status(200).json(tasks);
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}
