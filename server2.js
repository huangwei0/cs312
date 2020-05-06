var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var port = 8080;

console.log("Starting server on port " + port);

http.createServer(function (req, res) {
  if(url.parse(req.url, true).pathname == '/') {
    req.url = "/Dockerfile";
  }

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
}).listen(port);
