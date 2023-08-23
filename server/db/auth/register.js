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
const saltRounds = parseInt(process.env.ROUNDS);

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      return hash;
    })
    .catch(err => console.log(err));

  await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username, email, hashedPassword],
    error => {
      if (error) {
        throw error;
      }
    }
  );

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

module.exports = register;
