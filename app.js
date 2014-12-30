
/**
 * Module dependencies.
 */
var log4js= require ("log4js");
var logger = log4js.getLogger('App');
logger.setLevel('ERROR');
var express = require('express');
var user = require('./routes/samples/user');
var http = require('http');
var path = require('path');
var errors = require('./lib/errors.js');
var config = require('./lib/config.js');

var app = express();

// all environments



config.addToApp(app);


var timeout = require('connect-timeout'); //express v4

app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
    if (!req.timedout) next();
}

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var restEndPoints = require('./lib/restEndPoints.js');

restEndPoints.addToApp(app);










var func=function(){
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
}
exports.env=app.get('env');


func();


