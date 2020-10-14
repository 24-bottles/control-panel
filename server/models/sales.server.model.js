'use strict';
const db = require(process.env.BASE_PATH + '/framework/dbclient');
const ObjectID = require('mongodb').ObjectID;
const Sale = function() {

  const model = {
    getter: getter
  };

  function getter(inputObj){
    return new Promise(function(resolve, reject) {
      var mock = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
          name: '2020',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
          name: '2019',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
      }
      resolve(mock);
    });
    /*
    return new Promise(function(resolve, reject) {
      db.get().collection('sales').find({}).toArray(function(err, items) {
        if (err) {
          reject(err);
        } else {
          resolve(items);
        }
      });
    });
    */
  }

  return model;

};

module.exports = new Sale();
