//Test Posts API
//route:    GET /api/posts/test
//access:   Public
export const testMsgPosts = (req, res) => {
	res.json({ msg: "Posts API is working." });
};
