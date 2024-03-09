import express from "express"
import { verifiyToken } from "../utils/verifiedUser.js";
import { create } from "../controllers/post.controller.js";

const router=express.Router();


router.post("/create",verifiyToken,create)


export default router;