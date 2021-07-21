const routingTable = require('./routingTable');
const shards = require('./shards.json');

const pickShard = (req) => {
  let body = '';
  let key;
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const parsedBody = JSON.parse(body);
    // TODO definir que va aca
    key = parsedBody.key;
  });

  if (routingTable.has(key)) {
    return routingTable.get(key);
  }

  // TODO aplicar criterio de decision para que shard lo mandas
  routingTable.set(key, shards.shard1);
  return shards.shard1;
};

module.exports = {
  pickShard,
};
