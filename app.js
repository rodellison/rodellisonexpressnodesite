"use strict"
var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname,'/site')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname,'/site/index.html'))
	console.log('Serving up /site/index.html page');
    
}) ;

//Commenting out the below, which was for a normal ip/port run express node app.. don't need this when running
//a ClaudiaJS oriented Express app in Lambda and API Gateway..
// Constants
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//app.listen(port, ip);
//console.log('Listening on '+ ip + ':' + port);

module.exports = app; // add this line


