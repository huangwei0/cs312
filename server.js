var http = require('http');
http.createServer(function (request, response)
{
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('return Docke file\n');
  import response.end from './Dockerfile.NJSweb'
}).listen(8080);
console.log('Server started');
