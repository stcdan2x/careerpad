//Test Profile API
//route:    GET /api/profile/test
//access:   Public
export const testMsgProfile = (req, res) => {
	res.json({ msg: "Profile API is working." });
};
