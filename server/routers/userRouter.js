import express from "express";
import { testMsgUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/test", testMsgUsers);

export default userRouter;
