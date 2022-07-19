const userModel = require('../models/user.models')
const controller = require('../utils/crud')
const userController = controller.crudControllers(userModel)
module.exports = userController