const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userQuery = require('./db/userQueries');
const authQuery = require('./db/authQueries');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/users', userQuery.getUsers);
app.get('/users/:id', userQuery.getUserById);
app.post('/users', userQuery.createUser);
app.put('/users/:id', userQuery.updateUser);
app.delete('/users/:id', userQuery.deleteUser);

app.post('/login', authQuery.login);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
