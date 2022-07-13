const Rating = require("../models/rating");
const { crudControllers } = require("../utils/crud");

/**
 * Model agnostic crud controller
 */
module.exports = crudControllers(Rating);
