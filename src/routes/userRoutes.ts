import { Router } from "express";
import { fetchUsers, profileUsers } from "../controller/userController";

const router = Router();

router.get("/all", fetchUsers);
router.get("/profile", profileUsers)

export default router;