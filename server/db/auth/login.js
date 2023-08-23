const bcrypt = require('bcrypt');
require('dotenv').config();
const authSchema = require('../schemas/Auth');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const login = async (req, res) => {
  const validated = authSchema.validate(req.body);
  if (validated.error) {
    return res.status(401).send('Invalid Username or Password');
  }

  const { username, password } = req.body.user;

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

  req.session.authenticated = true;
  res.status(200).send();
};

module.exports = login;
