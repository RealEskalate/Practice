import express from 'express';

import { getTasks, searchTasks, putTask, getCompletedTasks }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/Completed-Tasks', getCompletedTasks)
router.put('/:id', putTask);

router.post('/', postTask);
router.get('/:keyword', searchTasks)

export default router;