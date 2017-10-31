var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Express Works');
});

app.listen(3000, function() {
  console.log('Express Started');
});
