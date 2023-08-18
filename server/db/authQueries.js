const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const login = async (req, res) => {
  const { username, password } = req.body;

  const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [
    username,
  ]);

  const validPassword = await bcrypt
    .compare(password, rows[0].password)
    .then(res => {
      return res;
    })
    .catch(err => console.error(err));

  if (!validPassword) {
    res.status(400).send('Invalid Username or Password');
  } else {
    res.status(200).send(rows[0]);
  }
};

module.exports = {
  login,
};
