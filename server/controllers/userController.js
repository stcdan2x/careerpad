//Test Users API
//route:    GET /api/users/test
//access:   Public
export const testMsgUsers = (req, res) => {
	res.json({ msg: "Users API is working." });
};
