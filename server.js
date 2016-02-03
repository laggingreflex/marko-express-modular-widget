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

const server = app.listen(8080, function() {
  console.log('Listening on localhost:8080');
});
const io = require('socket.io').listen(server);
