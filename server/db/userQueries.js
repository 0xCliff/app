const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const saltRounds = 10;

const getUsers = async (req, res) => {
  await pool.query(
    'SELECT * FROM users ORDER BY user_id ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  await pool.query(
    'SELECT * FROM users WHERE user_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const createUser = async (req, res) => {
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
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

const updateUser = async (req, res) => {
  const { id } = request.params;
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      return hash;
    })
    .catch(err => console.log(err));

  await pool.query(
    'UPDATE users SET name = $1, email = $2, password = $3, WHERE user_id = $4',
    [username, email, hashedPassword, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    'DELETE FROM users WHERE user_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
