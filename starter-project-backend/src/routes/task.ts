import express from 'express';

import { getTasks, putTask, searchTasks }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);
router.put('/:id', putTask);

router.post('/', postTask);
router.get('/:keyword', searchTasks)

export default router;