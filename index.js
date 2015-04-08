var express = require('express');
var morgan = require('morgan');
var http = require('http');
var app = express();

app.use(morgan('combined'));

app.set('port', (process.env.PORT || 9000));
app.set('ip', (process.env.IP || undefined));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('public/index.html', { root: __dirname })
});

app.get('*', function(req, res) {
	res.status(404).send('Bad Request');
});

http.createServer(app).listen(app.get('port'), app.get('ip'), function () {
  console.log('Express server listening on %d', app.get('port'));
});