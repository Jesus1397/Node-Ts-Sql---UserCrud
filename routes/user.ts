import { Router } from "express";
import {
  deleteUsers,
  getUser,
  getUsers,
  postUsers,
  putUsers,
} from "../controllers/users";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUsers);
router.put("/:id", putUsers);
router.delete("/:id", deleteUsers);

export default router;
