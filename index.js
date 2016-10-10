"use strict"
var express = require('express');
var app = express();
var path = require('path');

// Constants
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.use(express.static(path.join(__dirname,'/site')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname,'/site/index.html'))
	console.log('Serving up /site/index.html page');
    
}) ;

app.listen(port, ip);
console.log('Listening on '+ ip + ':' + port);


