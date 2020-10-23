exports.register = (req, res) => {
  res.status(200).json({ message: 'Register' });
};

exports.login = (req, res) => {
  res.status(200).json({ message: 'Login' });
};