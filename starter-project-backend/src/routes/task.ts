import express from 'express';

import { getTasks, putTask }
    from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);
router.put('/:id', putTask);

export default router;