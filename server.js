var express = require('express'),
	swig = require('swig');
var server = express();

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app/views');

require('./app/controllers/home')(server);

server.listen(3000);