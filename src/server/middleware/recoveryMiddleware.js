let serverDown = false;

const recoveryMiddleware = (req, res, next) => {
  if (serverDown) {
    return res.status(205).json({ message: 'server down!!!!!' });
  }
  next();
};

const setDownState = (state) => {
  serverDown = state;
};

module.exports = {
  recoveryMiddleware,
  setDownState,
};
