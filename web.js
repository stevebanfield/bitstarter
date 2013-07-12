// new code

var express = require('express');
var app = express();
var fs = require('fs');
var sourceName = 'index.html';
var size = 50;

var buffer = new Buffer(size);

buffer = fs.readFileSync(sourceName);
// console.log(buffer.toString('utf-8'));

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




/* original web.js code


var app = express.createServer(express.logger());



app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

*/