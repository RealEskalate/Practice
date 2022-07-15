const Comment = require("../models/comment");
const { crudControllers } = require("../utils/commentRoutes");

module.exports = crudControllers(Comment);
