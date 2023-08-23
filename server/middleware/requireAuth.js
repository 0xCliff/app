const requireAuth = (req, res, next) => {
  if (!req.session.authenticated) {
    return res.status(401).send('You are not logged in');
  }
  next();
};

module.exports = requireAuth;
