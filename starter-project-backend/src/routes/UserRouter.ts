import { NextFunction, Router } from "express";
import {
  getAllUsers,
  getUserDetail,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/UserController";

const router = Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserDetail);
router.post("/api/users/signup", createUser);
router.delete("/api/users", deleteUser);
router.patch("/api/users", updateUser);

export default router;
