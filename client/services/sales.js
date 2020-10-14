'use strict';
angular.module('App').service('Sales', [
'$http',
function($http) {

  var self = this;

  /**
  @jsDoc
  @name Example
  @description Lorem ipsum dolor sit amet consectetur adipisicing elit.
  @param foo, Required:true, Expect:Array
  @return String
  @example Example.test();
  */
  self.getter = function(data){
    return $http.get('/api/sales/units-sales-italy').then(function(response){
      return response;
    });
  };

}]);
