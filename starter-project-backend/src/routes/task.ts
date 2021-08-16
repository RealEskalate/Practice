import express from "express";

import {
  getFirstLTasks,
  putTask,
  getCompletedTasks,
  postTask,
  deleteTask,
  searchTasks,
  getAllTasks,
  getTaskById,
} from "../controllers/task";

const router = express.Router();

router.get("/count", getFirstLTasks);

router.get("/", getAllTasks);

router.get("/search/:keyword", searchTasks);

router.get("/Completed-Tasks", getCompletedTasks);

router.get("/:id",getTaskById);

router.put("/:id", putTask);

router.post("/", postTask);


router.get("/delete/:id", deleteTask);

export default router;
