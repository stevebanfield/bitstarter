// new code

var express = require('express');

var fs = require('fs');
var sourceName = "index.html";
var size = 28;

// var contents = new Buffer(size);

var contents = fs.readFileSync(sourceName, 'utf-8');

console.log(contents);

// var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
// //  response.send(contents.toString('utf-8'));
//     response.send(contents);

// });

// console.log(contents.toString('utf-8'));

// var port = process.env.PORT || 5000;
// app.listen(port);


// response.send(contents.toString('utf-8'));

/* require('fs').readFileSync(sourceName).toString().split(/\r?\n/).forEach(function(line){
  console.log(line);
//    response.send(line);
});
*/

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