import express, {
  Application,
  Request,
  Response,
  NextFunction,
  json,
} from "express";
import dotenv from "dotenv";

//Routers
const userRouter = require("./routes/UserRouter");

dotenv.config();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", json({}));
app.use(userRouter);

export default app;
