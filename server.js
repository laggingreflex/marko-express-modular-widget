const express = require('express');

const app = express();

var marko = require('marko');
var template = marko.load(require.resolve('./template.marko'));
app.use(function(req, res) {
  template.stream({}).pipe(res);
});

app.listen(8080, function() {
  console.log('Listening on localhost:8080');
});
