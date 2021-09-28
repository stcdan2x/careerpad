import dotenv from "dotenv";

dotenv.config();

const env = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	MONGODB_URL: process.env.MONGODB_URL,
	JWT_SECRET: process.env.JWT_SECRET,
	SECRETORKEY: process.env.SECRETORKEY,
	PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
};

export default env;
