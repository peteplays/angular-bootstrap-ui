'use strict';
var port        = process.env.PORT || 4000,
    express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    favicon     = require('serve-favicon');

app .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('www'))
    .use(favicon(__dirname + './../app/images/favicon.ico'));

var log = require('bunyan').createLogger({ name: 'Angular Bootstrap Fun' });

app.get('/*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile("index.html", { root: __dirname + "/../app" });
});

log.info('Listening on port %s', port);
app.listen(port);
