
var errors = require('./errors.js');
var config = require('./config.js');


function RestEndPoints() {}


RestEndPoints.prototype.addToApp = function(app) {
  //End points..
  app.all('/', dontAllowDirectRequestsToIndex);
  app.post('/signedrequest', processSignedRequest);
  app.get('/signedrequest', dontAllowDirectRequestsToIndex);

};


RestEndPoints.prototype.setAppSecret = function(secret) {
  console.log('setting secret..' + secret);
  APP_SECRET = secret;
};

exports = module.exports = new RestEndPoints;

//------------------------------------------ HANDLERS ---------------------------------------------
//-------------------------------------------------------------------------------------------------

//HTTP GET to / (not allowed)
function dontAllowDirectRequestsToIndex(req, res) {
  res.render("error", {
    error: errors.HTTP_GET_POST_NOT_SUPPORTED
  });
}

//Processes signed-request and displays index.ejs

/*function processSignedRequest(req, res) {
  var shipment = new Shipment();
  try {
    var json = shipment.processSignedRequest(req.body.signed_request, config.APP_SECRET);
    res.render("index", json);
  } catch (e) {
    res.render("error", {
      "error": errors.SIGNED_REQUEST_PARSING_ERROR
    });
  }
}*/




var decode = require('salesforce-signed-request');



function processSignedRequest(req, res) {
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


