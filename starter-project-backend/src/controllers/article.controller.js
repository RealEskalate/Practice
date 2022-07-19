const article = require("../models/article");
const controller = require('../utils/crud'); //here we import the module from utils
const articleController = controller.crudControllers(article); //here we passed the schema as an argument

module.exports = articleController;
