const bcrypt = require('bcrypt');
require('dotenv').config();

const userSchema = require('../schemas/User');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const saltRounds = parseInt(process.env.ROUNDS);

const register = async (req, res) => {
  const validated = userSchema.validate(req.body);
  if (!validated.error) {
    const msg = validated.error.details.map(err => err.message).join(',');
    return res.status(401).send(msg);
  }

  const { name, username, email, password } = req.body.user;

  const hashedPassword = await bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      return hash;
    })
    .catch(err => console.log(err));

  await pool.query(
    'INSERT INTO users (name, username, password, email, created_on) VALUES ($1, $2, $3, $4, $5)',
    [name, username, hashedPassword, email, new Date()],
    error => {
      if (error) {
        throw error;
      }
    }
  );

  req.session.authenticated = true;
  res.status(200).send();
};

module.exports = register;
