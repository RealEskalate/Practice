import express, {Application, Request, Response, NextFunction} from 'express';

import mongoose from 'mongoose';

import dotenv from 'dotenv';

import routes from './routes';
import router from './routes/task';

dotenv.config();

const DB_URI = process.env.MONGO_URI || "";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/tasks", routes.taskRouter);
app.use("/api/notes", routes.noteRouter);
app.use(router);

// @ts-ignore
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => {
    app.listen(8000, () => console.log('Server running...'));
})
.catch((err) => console.log('Error occurred while connecting', err));

