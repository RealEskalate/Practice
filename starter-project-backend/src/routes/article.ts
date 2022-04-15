import {Router} from "express"
let router = Router()

import controller from "../controllers/article";


router.get("/",controller.getAllArticle)//not Id to get all posts

router.get("/:id", controller.getArticleById)
router.delete("/:id", controller.deleteArticleById)
router.patch("/:id", controller.updateArticleById)

router.post("/", controller.addArticle);

  
export default router;
