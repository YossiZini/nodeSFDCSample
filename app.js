
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

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

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


app.get('/users', user.list);
app.post('/signedrequest', processSignedRequest);




var decode = require('salesforce-signed-request');



function processSignedRequest(req, res) {
    var shipment = new Shipment();
    try {
        var json = func(req.body.signed_request, config.APP_SECRET);
        res.render("index", json);
    } catch (e) {
        res.render("error", {
            "error": errors.SIGNED_REQUEST_PARSING_ERROR
        });
    }
}

func = function processSignedRequest(signedRequest, APP_SECRET) {
    var sfContext = decode(signedRequest, APP_SECRET);
    //console.log(sfContext);
    return {
        oauthToken: sfContext.client.oauthToken,
        instanceUrl: sfContext.client.instanceUrl

    }
    //        warehouseId: sfContext.context.environment.parameters.id //sent as parameters via visualForce parameters
};


var func=function(){
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
}
exports.env=app.get('env');


func();


