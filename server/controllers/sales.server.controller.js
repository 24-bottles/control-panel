'use strict';
const Sales = require(process.env.SERVER_PATH + '/models/sales.server.model');

/**
@jsDoc
@description: Getter function
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.getter = function(req, res) {
  var example = {
    foo: req.body.bar
  };
  Sales.getter(example).then(function(result) {
    res.json(result);
  });
};
