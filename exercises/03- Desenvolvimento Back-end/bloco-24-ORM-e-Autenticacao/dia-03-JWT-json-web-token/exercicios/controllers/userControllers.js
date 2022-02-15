const me = (req, res) => {
	const { username, admin } = req.user;

	return res.status(200).json({ username, admin });
};

const topSecret = (_req, res) => {
	return res.status(200).json({ secretInfo: 'O jogo' })
}

module.exports = {
	me,
	topSecret,
}