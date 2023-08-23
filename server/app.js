const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const userQuery = require('./db/userQueries');
const authQuery = require('./db/auth/index');
const requireAuth = require('./middleware/requireAuth');

const app = express();

sessionConfig = {
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
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

app.get('/api/users', requireAuth, userQuery.getUsers);
app.get('/api/users/:id', requireAuth, userQuery.getUserById);
app.put('/api/users/:id', requireAuth, userQuery.updateUser);
app.delete('/api/users/:id', requireAuth, userQuery.deleteUser);

app.post('/api/login', authQuery.login);
app.post('/api/signup', authQuery.register);
app.post('/api/logout', requireAuth, authQuery.logout);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
