const express = require('express')
const articleController = require('../controllers/article.controller')
const router = express.Router()
const { isAuthorized } = require('../middlewares/articleAuthorization')

router.route('/').get(articleController.getMany)
router.route('/:id').get(articleController.getOne)
router.route('/').post(articleController.createOne)
router.route('/:id').patch(isAuthorized, articleController.updateOne)
router.route('/:id').delete(isAuthorized, articleController.removeOne)

module.exports = router
