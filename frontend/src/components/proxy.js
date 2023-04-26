const https = require('https');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  agent: https.globalAgent,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

proxy.on('error', (error, req, res) => {
  console.error(error);
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong.');
});

module.exports = function(req, res) {
  const target = 'https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com';
  proxy.web(req, res, { target });
};
