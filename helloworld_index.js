var express = require('express');
var app = express();

app.get('/v1/hello', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
