import express from "express";
import { verifiyToken } from "../utils/verifiedUser.js";
import { create, deletepost, getposts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifiyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifiyToken, deletepost);

export default router;
