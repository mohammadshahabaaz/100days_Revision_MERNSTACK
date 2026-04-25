import { Router } from "express";
import { addUser, deleteUserById, fetchUsers, getUserByApplicationId } from "../controller/userController";

const router = Router();

router.get("/all", fetchUsers);
router.post("/add", addUser)
router.get("/:id", getUserByApplicationId)
router.delete("/:id", deleteUserById)

export default router;