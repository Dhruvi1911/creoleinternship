//core modulr can be import by using reqire function
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello world duniya');
}).listen(8000);

//local module
var calculator = require('./calc'); 
//here in calc.js file modules are exported
var x=10;
var y=20;
console.log("addition of x & y is "+calculator.add(x,y));
console.log("subtraction of x & y is "+calculator.sub(x,y));
console.log("multiplication of x & y is "+calculator.mul(x,y));
console.log("division of x & y is "+calculator.div(x,y));

//third-party modules are mongoose, express, angular, and react.
//npm install packagename