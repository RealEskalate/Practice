import express, {Application, Request, Response, NextFunction} from 'express';

import mongoose from 'mongoose';

import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const DB_URI = 'mongodb+srv://enoch:TVi2jwT62Yiz9GU@cluster0.hnbgb.mongodb.net/backend_starter?retryWrites=true&w=majority';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/tasks", routes.taskRouter)

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => {
    app.listen(8000, () => console.log('Server running...'));
})
.catch((err) => console.log('Error occured while connecting', err));

