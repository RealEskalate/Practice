import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_URI: string = process.env.MONGO_URI || "";

// @ts-ignore
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: "esklatePractice",
  })
  // .then(() => {
  //   app.listen(PORT, () => console.log("Server running..."));
  // })
  .catch((err: any) => console.log("Error occurred while connecting", err));

const server = app.listen(PORT, () => console.log("Server running..."));

module.exports = server;
