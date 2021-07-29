import express from 'express';

import { getTasks } from '../controllers/task';

const router = express.Router();

router.get('/', getTasks);

export default router;