const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const privateKey = process.env.KEY;

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE username = $1', [
    username,
  ]);

  if (!user.rows.length) {
    return res.status(401).send('Invalid Username or Password');
  }

  const pw = user.rows[0].password;
  const validPassword = await bcrypt.compare(password, pw);

  if (!validPassword) {
    return res.status(401).send('Invalid Username or Password');
  }

  const token = jwt.sign(username, privateKey, { algorithm: 'HS256' });
  const sessionUser = {
    id: token,
    username: username,
  };
  req.session.user = sessionUser;
  return res
    .status(200)
    .cookie('user', token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .send();
};

module.exports = login;
