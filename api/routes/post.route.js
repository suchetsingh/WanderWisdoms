import express from "express"
import { verifiyToken } from "../utils/verifiedUser.js";
import { create, getposts } from "../controllers/post.controller.js";

const router=express.Router();


router.post("/create",verifiyToken,create);
router.get("/getposts",getposts)


export default router;