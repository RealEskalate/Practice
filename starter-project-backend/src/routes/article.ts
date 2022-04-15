import {Router} from "express"

let router = Router()
let controller = require("../controllers/article")


router.get("/all",controller.getAllArticle)//all in no id
router.get("/byid", controller.getArticleById)

router.post("/", controller.addArticle);
router.patch("/:id", controller.updateArticleById)
router.delete("/:id", controller.deleteArticleById)


module.exports = router
