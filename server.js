var express = require('express');
var app = express();
app.use(express.static('public'));
var mysql = require('mysql');

app.get('/', function (req, res) {
  res.send();
});

var port = 3500;

app.listen(port, function () {
  console.log('Listening on port ', port);
});