import express, { Application } from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/UserRouter";

dotenv.config();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", json({}));
app.use(UserRouter);

export default app;
