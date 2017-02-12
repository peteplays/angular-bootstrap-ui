'use strict';
var port        = process.env.PORT || 4000,
    express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    favicon     = require('serve-favicon'),
    ip          = '127.0.0.1',
    cors = require('cors');

app .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('www'))
    .use(favicon(__dirname + './../app/images/favicon.ico'))
    .use(cors());

var log = require('bunyan').createLogger({ name: 'Angular Bootstrap Fun' });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile("index.html", { root: __dirname + "/../app" });
});

log.info('Listening on port %s', port);
app.listen(port, ip);
