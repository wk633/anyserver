const http = require('http');
const config = require('./config/defaultConfig');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>');
  res.write('hello world');
  res.write('</h1>');
  res.end();
});

server.listen(config.port, config.hostname, ()=>{
  const address = `http://${config.hostname}:${config.port}`;
  console.info(`server started at ${address}`);
})
