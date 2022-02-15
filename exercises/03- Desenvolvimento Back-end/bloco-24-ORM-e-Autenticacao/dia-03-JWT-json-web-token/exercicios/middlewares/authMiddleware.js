const jwt = require('jsonwebtoken');

const SECRET = 'SECRET';

const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ error: { message: 'Token not found' } });
	}

	try {
		const payload = jwt.verify(token, SECRET);

		req.user = payload;

		return next();
	} catch (error) {
		return res.status(401).json({ error: { message: error.message } });
	}
};

module.exports = {
	authMiddleware,
}