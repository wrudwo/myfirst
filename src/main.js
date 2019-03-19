var http = require('http')
var url = require('./url.js')


http.createServer(url.handleRequest).listen(8080);