// new code

require('buffer');

var fs = require('fs');
var sourceName = "./index.html";
var size = 30;

var contents = new Buffer(size);

contents = fs.readSync(sourceName, "utf-8");

console.log(contents.toString);

/* require('fs').readFileSync(sourceName).toString().split(/\r?\n/).forEach(function(line){
  console.log(line);
//    response.send(line);
});
*/

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