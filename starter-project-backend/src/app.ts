import express, {Application, Request, Response, NextFunction, json} from 'express';
import dotenv from 'dotenv';
import routes from './routes'

dotenv.config();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", json({}))
app.use("/api/rate", routes.ratingsRouter)


app.use("/api/articles", routes.articleRouter)

export default app
