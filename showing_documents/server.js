var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){
  response.writeHead(200, {'content-type': 'text/html'});

  switch (request.url) {
    case '/':
      templates = 'index.html';
      break;
    case '/nodejs':
      templates = 'about_node.html';
      break;
    default:
      templates = '404.html';
      break;

  }

  fs.readFile('./templates/' + templates, function (error, data){
      response.write(data);
      response.end();
  });

}).listen(3000, 'localhost');
