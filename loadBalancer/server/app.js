const http = require('http');
const httpProxy = require('http-proxy');
const { pickShard } = require('./balance');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const shardUrl = pickShard(req);
  proxy.web(req, res, { target: shardUrl });
});

proxy.on('error', (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });

  res.end('Something went wrong. And we are reporting a custom error message.');
});
server.listen(3003);
