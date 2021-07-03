const { restoreServerState } = require('../../services/restoreServerState');

const restore = async (req, res, next) => {
  try {
    const { serverState } = req.body;

    restoreServerState(serverState);

    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  restore,
};
