import express from 'express';



import { getAllTasks, getFirstLTasks, searchTasks, putTask, getCompletedTasks, postTask, deleteTask }
    from '../controllers/task';


const router = express.Router();

router.get('/count', getFirstLTasks);

router.get('/', getAllTasks);

router.get('/Completed-Tasks', getCompletedTasks)

router.put('/:id', putTask);

router.post('/', postTask);

router.get('/:keyword', searchTasks)

router.get('/delete/:id',deleteTask);

export default router;