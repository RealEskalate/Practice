import {Router} from "express"
import {
    createRating,
    getRating,
    updateRating,
    deleteRating
} from "../controllers/ratings"


const router = Router({mergeParams: true})

router.get("/:articleId/ratings/", getRating)
router.patch("/:articleId/ratings/", updateRating)
router.delete("/:articleId/ratings/", deleteRating)
router.post("/:articleId/ratings/", createRating)

export default router