// new code

require('expresss');

var fs = require('fs');
var sourceName = "index.html";
var size = 50;

var contents = new Buffer(size);

contents = fs.readFileSync(sourceName);

console.log(contents.toString('utf-8'));

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