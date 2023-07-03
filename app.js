const https = require('https');
const path = require('path');
const fs = require('fs');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Bienvenido Luis a tu servidor https!');
});

server.listen(443, () => {
  console.log('Server listening on port 443');
});