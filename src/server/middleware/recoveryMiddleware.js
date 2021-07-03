let serverDown = true;
const recoveryMiddleware = (req, res, next) => {
  if (serverDown) {
    serverDown = false;
    return res.status(205).json({ message: 'server down!!!!!' });
  }
  next();
};

module.exports = {
  recoveryMiddleware,
};
