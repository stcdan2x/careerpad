import express from "express";
import { testMsgProfile } from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/test", testMsgProfile);

export default profileRouter;
