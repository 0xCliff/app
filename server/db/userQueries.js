const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'api',
  password: process.env.PASSWORD,
  port: 5432,
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email, password } = request.body

  //TODO hash password before storing it in the db.

  pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  });
}

const updateUser = (request, response) => {
  const { id } = request.params
  const { name, email, password } = request.body

  //TODO hash password before storing it in the db.

  pool.query(
    'UPDATE users SET name = $1, email = $2, password = $3, WHERE id = $4',
    [name, email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    });
};

const deleteUser = (request, response) => {
  const { id } = request.params

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};