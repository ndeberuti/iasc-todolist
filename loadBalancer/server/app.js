const http = require('http');
const httpProxy = require('http-proxy');
const { pickShard } = require('./balance');

const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
  const shardUrl = pickShard(req);
  proxy.web(req, res, { target: shardUrl });
}).listen(3003);
