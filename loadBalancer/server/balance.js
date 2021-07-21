const shards = require('./shards.json');

const pickShard = (req) => (req.headers.ispublicmode ? shards.shard1 : shards.shard2);
// let body = '';
// let shard = null;

// req.on('data', (chunk) => {
//   body += chunk;
// });
// await req.on('end', async () => {
//   const parsedBody = JSON.parse(body);
//   // TODO definir que va aca
//   console.log(parsedBody.isPublicMode);
//   shard = parsedBody.isPublicMode ? shards.shard1 : shards.shard2;
// });

// if (routingTable.has(key)) {
//   return routingTable.get(key);
// }

// // TODO aplicar criterio de decision para que shard lo mandas
// routingTable.set(key, shards.shard1);
// return shards.shard1;

module.exports = {
  pickShard,
};
