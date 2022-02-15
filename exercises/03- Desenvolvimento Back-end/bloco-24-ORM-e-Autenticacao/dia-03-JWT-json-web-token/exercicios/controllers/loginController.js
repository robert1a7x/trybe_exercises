const Joi = require('joi');
const jwt = require('jsonwebtoken');

const SECRET = 'SECRET'

const validateLogin = (body) => {
	return Joi.object({
		username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
	}).validate(body);
}

const login = async (req, res) => {
	const { username, password } = req.body;

	const { error } = validateLogin(req.body);

	if (error) {
		return res.status(400).json({ message: error.message });
	}

	if (username === 'admin' && password !== 's3nh4S3gur4???') {
		return res.status(401).json({ message: 'Invalid username or password' })
	}

	const admin = username === 'admin' && password === 's3nh4S3gur4???';

	const payload = {
		username,
		admin,
	}

	const token = jwt.sign(payload, SECRET, { expiresIn: '10h' });

	return res.status(200).json({ token });
};

module.exports = {
	login,
}