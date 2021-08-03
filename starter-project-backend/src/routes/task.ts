import express from 'express';

import { getTasks, putTask }
    from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);
router.put('/:id', putTask);

router.post('/', postTask);

export default router;