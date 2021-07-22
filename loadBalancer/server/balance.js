const shards = require('./shards.json');

const pickShard = (req) => ((req.headers.ispublicmode == "true") ? shards.shard1 : shards.shard2);

module.exports = {
  pickShard,
};
