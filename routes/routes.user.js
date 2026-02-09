import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createPost,
  getPost
} from "../controllers/users.controller.js";

import { checkAuth, validateUserId } from "../middleware/auth.js";
import { validateCreateUserDTO, updateUserDTO } from "../DTO/dto.js";

const router = express.Router();

router.get("/", checkAuth, getUsers);
router.post("/", validateCreateUserDTO, createUser);
router.patch("/:id", validateUserId, updateUserDTO, updateUser);
router.delete("/:id", validateUserId, deleteUser);
router.post("/post", createPost);
router.get("/post",getPost);

export default router;