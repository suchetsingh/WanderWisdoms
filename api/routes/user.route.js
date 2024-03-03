import express from "express";
import { deleteUser, test, updateUser } from "../controllers/user.controller.js";
import { verifiyToken } from "../utils/verifiedUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId",verifiyToken,updateUser);
router.delete("/delete/:userId",verifiyToken,deleteUser)

export default router;