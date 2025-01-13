import { Router } from "express";
import { createUser, updateUser ,fetchUsers, showUser, deleteUser } from "../Controller/UserController.js";


const router = Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", fetchUsers);
router.post("/:id", showUser);
router.delete("/:id", deleteUser);
// Export userRoutes as the default export
export default router;

