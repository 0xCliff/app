const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userQuery = require('./db/userQueries');
const authQuery = require('./db/authQueries');

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/users', userQuery.getUsers);
app.get('/users/:id', userQuery.getUserById);
app.post('/users', userQuery.createUser);
app.put('/users/:id', userQuery.updateUser);
app.delete('/users/:id', userQuery.deleteUser);

app.post('/login', authQuery.login);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
