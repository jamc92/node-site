var http = require('http');

http.createServer(function (request, response){
  response.writeHead(200, {'content-type': 'text/plain'});
  response.write('Hello Node.js & Nginx. You rock!');
  response.end();
}).listen(3000, 'localhost');

console.log('Server running on http://localhost:3000');
