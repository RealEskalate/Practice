import express from 'express';

import { getTasks, getFirstLTasks, putTask }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);

router.get('/count', getFirstLTasks);

router.put('/:id', putTask);

router.post('/', postTask);

export default router;