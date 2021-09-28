import User from "../models/User.js";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import env from "./env.js";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = env.SECRETORKEY;

export default (passport) => {
	passport.use(
		new JwtStrategy(opts, async (jwt_payload, done) => {
			User.findById(jwt_payload.id)
				.then((user) => {
					if (user) {
						return done(null, user);
					}
					return done(null, false);
				})
				.catch((err) => console.log(err));
		})
	);
};
