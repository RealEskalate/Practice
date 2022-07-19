const express = require('express');
const articleController = require('../controllers/article.controller')
const router = express.Router();

router.route('/').get(articleController.getMany)
router.route('/:id').get(articleController.getOne)
router.route('/').post(articleController.createOne)
router.route('/').patch(articleController.updateOne)
router.route('/:id').delete(articleController.removeOne)

module.exports = router