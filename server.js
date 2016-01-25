const express = require('express');

const app = express();

require('lasso').configure({
    plugins: [
        'lasso-marko'
    ]
});

var marko = require('marko');
var template = marko.load(require.resolve('./template.marko'));

app.get('/', function(req, res) {
    template.stream({}).pipe(res);
});

app.use('/static', express.static(__dirname + '/static'));

app.listen(8080, function() {
  console.log('Listening on localhost:8080');
});
