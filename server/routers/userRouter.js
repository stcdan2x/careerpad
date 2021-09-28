import express from "express";
import {
	authUser,
	registerUser,
	testMsgUsers
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/test", testMsgUsers);
userRouter.post("/login", authUser);
userRouter.post("/register", registerUser);

export default userRouter;
