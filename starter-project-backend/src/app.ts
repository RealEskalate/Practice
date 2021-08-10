import express, {Application, Request, Response, NextFunction} from 'express';


import dotenv from 'dotenv';
import routes from './routes';


dotenv.config();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/tasks", routes.taskRouter);
app.use("/api/notes", routes.noteRouter);


export default app