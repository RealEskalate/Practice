import express from 'express';

import { getTasks, getFirstLTasks, searchTasks, putTask, getCompletedTasks, postTask }
    from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);

router.get('/count', getFirstLTasks);

router.get('/', getAllTasks);

router.get('/Completed-Tasks', getCompletedTasks)

router.put('/:id', putTask);

router.post('/', postTask);

router.get('/:keyword', searchTasks)

export default router;