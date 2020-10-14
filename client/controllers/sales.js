'use strict';
angular.module('App').controller('salesController', [
'$scope',
'Sales',
function($scope, Sales) {

  $scope.sales = {};

  Sales.getter().then(function(result){
    $scope.sales.italy = result.data;
    console.log($scope.sales.italy);
  });

}]);
