'use strict'
const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/site`))

app.get('/', function(req, res) {
	res.sendFile(`${__dirname}/site/index.html`)
}) ;

//Commenting out the below, which was for a normal ip/port run express node app.. don't need this when running
//a ClaudiaJS oriented Express app in Lambda and API Gateway..
// Constants
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//app.listen(port, ip);
//console.log('Listening on '+ ip + ':' + port);

module.exports = app; // add this line


