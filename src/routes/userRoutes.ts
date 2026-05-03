import { Router } from "express";
import { addUser, deleteUserById, fetchUsers, getUserByApplicationId, updateUserById } from "../controller/userController";

const router = Router();

router.get("/", fetchUsers);
router.get("/all", fetchUsers);
router.post("/add", addUser)
router.get("/:id", getUserByApplicationId)
router.patch("/:id", updateUserById)
router.delete("/:id", deleteUserById)

export default router;