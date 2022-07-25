const Article = require("../models/article");

const isAuthorized = async (req, res, next) => {
  try {
    const article = await Article.findOne({ _id: req.params.id })
      .lean()
      .populate("userId")
      .exec();

    if (!article) {
      return res.status(400).end();
    } else {
      article_usrId = article.userId._id.toString();
      cur_userId = req.userId;

      if (article_usrId === cur_userId) {
        next();
      } else {
        res.status(401).send("Error: User not Authorized").end();
      }
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { isAuthorized };
