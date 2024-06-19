//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;

var server = http.createServer(function(req, res) {
  var url_parts = url.parse(req.url);

  if (url_parts.pathname === '/') {
    fs.readFile('./index.html', function(error, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    });
  } else if (url_parts.pathname === '/comments') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    var comments = [{
      name: 'John',
      message: 'hello'
    }, {
      name: 'Jane',
      message: 'hi'
    }];

    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Page not found');
  }
});

server.listen(port, function() {
  console.log('server started on port ' + port);
});