const requireAuth = (req, res, next) => {
  if (!req.session.user == req.body.user) {
    res.status(401).send('You are not logged in');
  }
  next();
};

module.exports = requireAuth;
