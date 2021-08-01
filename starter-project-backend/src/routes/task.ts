import express from 'express';

import { getTasks } from '../controllers/task';

import { postTask } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);

router.post('/', postTask);

export default router;