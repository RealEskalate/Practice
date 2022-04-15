import {Router} from "express"
import {
    createRating,
    getRating,
    updateRating,
    deleteRating
} from "../controllers/ratings"


const router = Router({mergeParams: true})

router.get("/", getRating)
router.patch("/", updateRating)
router.delete("/", deleteRating)
router.post("/", createRating)

export default router