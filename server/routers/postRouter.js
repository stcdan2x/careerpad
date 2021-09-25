import express from "express";
import { testMsgPosts } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/test", testMsgPosts);

export default postRouter;
