// new code

var express = require('express');
var fs = require('fs');
var sourceName = 'index.html';
var size = 50;

var contents = new Buffer(size);

contents = fs.readFileSync(sourceName);
console.log(contents.toString('utf-8'));

// var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send(contents.toString('utf-8'));
// //    console.log(contents.toString('utf-8'));
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });




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