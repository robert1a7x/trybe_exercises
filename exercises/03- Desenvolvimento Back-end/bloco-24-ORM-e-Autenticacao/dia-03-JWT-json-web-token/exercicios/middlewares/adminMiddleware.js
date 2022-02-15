const jwt = require('jsonwebtoken');

const SECRET = 'SECRET';

const adminMiddleware = (req, res, next) => {
	const { user } = req;

	if (!user) {
		return res.status(401).json({ error: { message: 'This requires authentication' } })
	}

	if (!user.admin) {
		return res.status(403).json({ error: { message: 'Restricted access' } })
	}

	return next();
};

module.exports = {
	adminMiddleware,
}