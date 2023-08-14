const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/userQueries');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
