const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ratingController = require("./controllers/rating.controller");
const articleRouter = require('./routes/article.routes');

const port = 3000;
const host = "127.0.0.1";
const dbUrl = "mongodb://localhost:27017/blog";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/v1/article', router) //here router is called for article

app.get("/api/rating", ratingController.getMany);
app.get("/api/rating/:id", ratingController.getOne);
app.post("/api/rating", ratingController.createOne);
app.put("/api/rating/:id", ratingController.updateOne);
app.delete("/api/rating/:id", ratingController.removeOne);

const start = async () => {
  await mongoose.connect(dbUrl, { useNewUrlParser: true });
  try {
    app.listen(port, host, () => {
      console.log(`Server running on http://${host}:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { start };
