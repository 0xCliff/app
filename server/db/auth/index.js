const login = require('./login');
const register = require('./register');

const logout = async (req, res) => {
  req.session = null;
  return res.status(200).clearCookie('user', { path: '/' }).send();
};

module.exports = {
  login,
  register,
  logout,
};
