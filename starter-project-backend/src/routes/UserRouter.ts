import { NextFunction, Router } from "express";

const router = Router();
const UserController = require("../controllers/UserController");
const middleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};

router.get("/api/users", UserController.getAllUsers);
router.get("/api/users/:id", UserController.getUserDetail);
router.post("/api/users/signup", UserController.createUser);
router.delete("/api/users", UserController.deleteUser);
router.patch("/api/users", UserController.updateUser);

export default router;
