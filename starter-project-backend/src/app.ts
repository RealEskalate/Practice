import express, { Application } from "express";
import UserRouter from "./routes/UserRouter";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", json({}));
app.use(UserRouter);

export default app;
