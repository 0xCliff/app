const login = require('./login');
const register = require('./register');

const logout = async (req, res) => {
  req.session = null;
  res.status(200).clearCookie('connect.sid', { path: '/' }).send();
};

module.exports = {
  login,
  register,
  logout,
};
