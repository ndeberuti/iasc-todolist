const { restoreServerStateService } = require('../../services/restoreServerStateService');

// eslint-disable-next-line consistent-return
const restore = async (req, res, next) => {
  try {
    const { serverState } = req.body;

    restoreServerStateService(serverState);

    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  restore,
};
