import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import morgan from "morgan";
import userRouter from "./routers/userRouter.js";
import profileRouter from "./routers/profileRouter.js";
import postRouter from "./routers/postRouter.js";
import passport from "passport";
import pass from "./config/passport.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //added for body parsing etc.

//Passport middleware
app.use(passport.initialize());
// Passport Config
pass(passport);

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.get("/", (req, res) => {
	res.send("API ACTIVE!");
});

//Routers
app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
