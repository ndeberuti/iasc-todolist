const shards = require('./shards.json');

class RoutingTable {
  constructor(map = new Map([
    ['key1', shards.shard1],
    ['key2', shards.shard2],
    ['key3', shards.shard3],
  ])) {
    this.map = map;
  }

  set(key, value) {
    this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }
}

module.exports = new RoutingTable();
