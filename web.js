// new code
/*
require('buffer');

var contents = "null";
var fs = require('fs');

contents = fs.readSync(sourceName, "utf-8");
*/

var sourceName = "index.html";

require('fs').readFileSync(sourceName).toString().split(/\r?\n/).forEach(function(line){
  console.log(line);
//    response.send(line);
});


/* original web.js code

var express = require('express');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

*/