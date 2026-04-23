import { Router } from "express";
import { addUser, fetchUsers, getUserByApplicationId } from "../controller/userController";

const router = Router();

router.get("/all", fetchUsers);
router.post("/add", addUser)
router.get("/:id", getUserByApplicationId)

export default router;