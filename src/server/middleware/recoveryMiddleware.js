let serverDown = false;

// eslint-disable-next-line consistent-return
const recoveryMiddleware = (req, res, next) => {
  if (serverDown) {
    return res.status(418).json({ message: 'server down!!!!!' });
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
