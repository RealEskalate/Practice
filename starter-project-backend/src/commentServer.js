const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ratingController = require("./controllers/comment.controller");

const port = process.env.PORT || 3000;
const host = "127.0.0.1";
const dbUrl = "mongodb://localhost:27017/blog";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/comments", ratingController.getMany);
app.get("/api/comments/:id", ratingController.getOne);
app.post("/api/comments", ratingController.createOne);
app.put("/api/comments/:id", ratingController.updateOne);
app.delete("/api/comments/:id", ratingController.removeOne);


const startApp = async () => {
  await mongoose.connect(dbUrl, { useNewUrlParser: true });
  try {
    app.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { startApp };
