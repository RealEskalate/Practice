import express from 'express';

import { getTasks, putTask, getCompletedTasks }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);
router.get('/Completed-Tasks', getCompletedTasks)
router.put('/:id', putTask);

router.post('/', postTask);

export default router;