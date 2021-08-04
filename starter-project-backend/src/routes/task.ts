import express from 'express';

import { getAllTasks, putTask, getCompletedTasks }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/Completed-Tasks', getCompletedTasks)
router.put('/:id', putTask);

router.post('/', postTask);

export default router;