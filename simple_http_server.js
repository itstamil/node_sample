var http = require('http'); // requiring an module 
console.log("Http", http)
//create a server object:
 http.createServer(function (req, res){
 	res.write('Welcome to Node.js Environment');
 	   res.end();
 }).listen(8080);
